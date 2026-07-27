-- ============================================================
-- HACK BOLT STUDIOS CLIENT PORTAL
-- SUPABASE / POSTGRESQL DATABASE SCHEMA
-- ============================================================

-- ============================================================
-- EXTENSIONS
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;


-- ============================================================
-- STATUS
-- ============================================================

CREATE TABLE IF NOT EXISTS "Status" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "Status" text NOT NULL UNIQUE,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now()
    );


-- ============================================================
-- BUSINESS ADDRESS
-- ============================================================

CREATE TABLE IF NOT EXISTS "BusinessAddress" (
     "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     "StreetAddress" text,
     "City" text,
     "Province" text,
     "PostalCode" text,
     "Country" text,
     "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
     "DateUpdatedOn" timestamptz NOT NULL DEFAULT now()
    );


-- ============================================================
-- SOCIAL MEDIA
-- ============================================================

CREATE TABLE IF NOT EXISTS "SocialMedia" (
     "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     "InstagramUrl" text,
     "FacebookUrl" text,
     "YoutubeUrl" text,
     "LinkedInUrl" text,
     "TiktokUrl" text,
     "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
     "DateUpdatedOn" timestamptz NOT NULL DEFAULT now()
    );


-- ============================================================
-- BUSINESS
-- ============================================================

CREATE TABLE IF NOT EXISTS "Business" (
      "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      "BusinessName" text NOT NULL,
      "CompanyRegistrationNumber" text,
      "BusinessEmail" text,
      "BusinessPhone" text,
      "BusinessWebsite" text,
      "BusinessAddressId" integer,
      "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
      "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_Business_BusinessAddress"
    FOREIGN KEY ("BusinessAddressId")
    REFERENCES "BusinessAddress" ("Id")
    ON DELETE SET NULL
    );


-- ============================================================
-- CLIENT
-- ============================================================

CREATE TABLE IF NOT EXISTS "Client" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "Guid" uuid NOT NULL DEFAULT gen_random_uuid(),
    "Name" text NOT NULL,
    "Surname" text NOT NULL,
    "PersonalEmail" text NOT NULL,
    "PersonalPhone" text,
    "BusinessId" integer,
    "StatusId" integer,
    "SocialMediaId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "UQ_Client_Guid"
    UNIQUE ("Guid"),

    CONSTRAINT "UQ_Client_PersonalEmail"
    UNIQUE ("PersonalEmail"),

    CONSTRAINT "FK_Client_Business"
    FOREIGN KEY ("BusinessId")
    REFERENCES "Business" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "FK_Client_Status"
    FOREIGN KEY ("StatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "FK_Client_SocialMedia"
    FOREIGN KEY ("SocialMediaId")
    REFERENCES "SocialMedia" ("Id")
    ON DELETE SET NULL
    );


-- ============================================================
-- CLIENT ACCOUNT
-- CONNECTS CLIENT TO SUPABASE AUTH
-- ============================================================

CREATE TABLE IF NOT EXISTS "ClientAccount" (
   "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "ClientId" uuid NOT NULL,
   "AuthUserId" uuid NOT NULL,
   "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
   "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "UQ_ClientAccount_ClientId"
    UNIQUE ("ClientId"),

    CONSTRAINT "UQ_ClientAccount_AuthUserId"
    UNIQUE ("AuthUserId"),

    CONSTRAINT "FK_ClientAccount_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE
    );


-- ============================================================
-- CLIENT AGREEMENT
-- ============================================================

CREATE TABLE IF NOT EXISTS "ClientAgreement" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientContractId" varchar(100) NOT NULL,
    "ClientId" uuid NOT NULL,
    "ContractTerm" text,
    "ContractStartDate" timestamptz,
    "ContractEndDate" timestamptz,
    "RenewalDate" timestamptz,
    "StatusId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "UQ_ClientAgreement_ContractId"
    UNIQUE ("ClientContractId"),

    CONSTRAINT "FK_ClientAgreement_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE,

    CONSTRAINT "FK_ClientAgreement_Status"
    FOREIGN KEY ("StatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL
    );


-- ============================================================
-- CLIENT AGREEMENT DOCUMENT
-- ============================================================

CREATE TABLE IF NOT EXISTS "ClientAgreementDocument" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientAgreementId" integer NOT NULL,
    "ContractFileName" text NOT NULL,
    "FileUrl" text NOT NULL,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_ClientAgreementDocument_Agreement"
    FOREIGN KEY ("ClientAgreementId")
    REFERENCES "ClientAgreement" ("Id")
    ON DELETE CASCADE
    );


-- ============================================================
-- CLIENT SERVICE
-- ============================================================

CREATE TABLE IF NOT EXISTS "ClientService" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientAgreementId" integer NOT NULL,
    "Name" text NOT NULL,
    "Description" text,
    "StatusId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_ClientService_Agreement"
    FOREIGN KEY ("ClientAgreementId")
    REFERENCES "ClientAgreement" ("Id")
    ON DELETE CASCADE,

    CONSTRAINT "FK_ClientService_Status"
    FOREIGN KEY ("StatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL
    );


-- ============================================================
-- PAYMENT METHOD
-- ============================================================

CREATE TABLE IF NOT EXISTS "PaymentMethod" (
       "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
       "Name" text NOT NULL UNIQUE,
       "Description" text,
       "DateCreatedOn" timestamptz NOT NULL DEFAULT now()
    );


-- ============================================================
-- BILLING CYCLE
-- ============================================================

CREATE TABLE IF NOT EXISTS "BillingCycle" (
      "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      "Name" text NOT NULL UNIQUE,
      "Description" text,
      "DateCreatedOn" timestamptz NOT NULL DEFAULT now()
    );


-- ============================================================
-- BILLING
-- ============================================================

CREATE TABLE IF NOT EXISTS "Billing" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientId" uuid NOT NULL,
    "ClientAgreementId" integer NOT NULL,
    "BillingCycleId" integer,
    "PaymentMethodId" integer,
    "ContractValue" numeric(12,2) NOT NULL DEFAULT 0,
    "MonthlyAmount" numeric(12,2) NOT NULL DEFAULT 0,
    "StartDate" date,
    "EndDate" date,
    "StatusId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_Billing_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Billing_Agreement"
    FOREIGN KEY ("ClientAgreementId")
    REFERENCES "ClientAgreement" ("Id")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Billing_Cycle"
    FOREIGN KEY ("BillingCycleId")
    REFERENCES "BillingCycle" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "FK_Billing_PaymentMethod"
    FOREIGN KEY ("PaymentMethodId")
    REFERENCES "PaymentMethod" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "FK_Billing_Status"
    FOREIGN KEY ("StatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "CK_Billing_ContractValue"
    CHECK ("ContractValue" >= 0),

    CONSTRAINT "CK_Billing_MonthlyAmount"
    CHECK ("MonthlyAmount" >= 0)
    );


-- ============================================================
-- INVOICE
-- ============================================================

CREATE TABLE IF NOT EXISTS "Invoice" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "BillingId" integer NOT NULL,
    "InvoiceNumber" text NOT NULL,
    "IssueDate" date NOT NULL,
    "DueDate" date NOT NULL,
    "Amount" numeric(12,2) NOT NULL,
    "InvoiceStatusId" integer,
    "InvoiceUrl" text,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "UQ_Invoice_InvoiceNumber"
    UNIQUE ("InvoiceNumber"),

    CONSTRAINT "FK_Invoice_Billing"
    FOREIGN KEY ("BillingId")
    REFERENCES "Billing" ("Id")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Invoice_Status"
    FOREIGN KEY ("InvoiceStatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "CK_Invoice_Amount"
    CHECK ("Amount" >= 0),

    CONSTRAINT "CK_Invoice_Dates"
    CHECK ("DueDate" >= "IssueDate")
    );


-- ============================================================
-- PAYMENT
-- ============================================================

CREATE TABLE IF NOT EXISTS "Payment" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "InvoiceId" integer NOT NULL,
    "ClientId" uuid NOT NULL,
    "PaymentMethodId" integer,
    "Amount" numeric(12,2) NOT NULL,
    "PaymentReference" text,
    "PaymentDate" timestamptz NOT NULL,
    "PaymentStatusId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_Payment_Invoice"
    FOREIGN KEY ("InvoiceId")
    REFERENCES "Invoice" ("Id")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Payment_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Payment_PaymentMethod"
    FOREIGN KEY ("PaymentMethodId")
    REFERENCES "PaymentMethod" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "FK_Payment_Status"
    FOREIGN KEY ("PaymentStatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "CK_Payment_Amount"
    CHECK ("Amount" > 0)
    );


-- ============================================================
-- EVENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS "Events" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientId" uuid NOT NULL,
    "EventName" text NOT NULL,
    "EventDescription" text,
    "EventDate" date NOT NULL,
    "StartTime" time,
    "EndTime" time,
    "EventPosterUrl" text,
    "StatusId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_Events_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Events_Status"
    FOREIGN KEY ("StatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL
    );


-- ============================================================
-- GALLERY CATEGORY
-- ============================================================

CREATE TABLE IF NOT EXISTS "GalleryCategory" (
     "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     "Name" text NOT NULL UNIQUE,
     "Description" text,
     "DateCreatedOn" timestamptz NOT NULL DEFAULT now()
    );


-- ============================================================
-- GALLERY
-- ============================================================

CREATE TABLE IF NOT EXISTS "Gallery" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientId" uuid NOT NULL,
    "ItemTitle" text NOT NULL,
    "GalleryCategoryId" integer,
    "GalleryImageUrl" text NOT NULL,
    "DisplayOrder" integer NOT NULL DEFAULT 0,
    "StatusId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_Gallery_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Gallery_Category"
    FOREIGN KEY ("GalleryCategoryId")
    REFERENCES "GalleryCategory" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "FK_Gallery_Status"
    FOREIGN KEY ("StatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "CK_Gallery_DisplayOrder"
    CHECK ("DisplayOrder" >= 0)
    );


-- ============================================================
-- PROMOTION TYPE
-- ============================================================

CREATE TABLE IF NOT EXISTS "PromotionType" (
       "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
       "PromoType" text NOT NULL UNIQUE,
       "DateCreatedOn" timestamptz NOT NULL DEFAULT now()
    );


-- ============================================================
-- PROMOTION
-- ============================================================

CREATE TABLE IF NOT EXISTS "Promotion" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientId" uuid NOT NULL,
    "PromotionName" text NOT NULL,
    "PromoTypeId" integer,
    "PromotionCode" text,
    "Discount" numeric(12,2),
    "DiscountType" text,
    "PromotionStartDate" date,
    "PromotionEndDate" date,
    "PromoPosterUrl" text,
    "StatusId" integer,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_Promotion_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE,

    CONSTRAINT "FK_Promotion_Type"
    FOREIGN KEY ("PromoTypeId")
    REFERENCES "PromotionType" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "FK_Promotion_Status"
    FOREIGN KEY ("StatusId")
    REFERENCES "Status" ("Id")
    ON DELETE SET NULL,

    CONSTRAINT "CK_Promotion_Discount"
    CHECK ("Discount" IS NULL OR "Discount" >= 0),

    CONSTRAINT "CK_Promotion_Dates"
    CHECK (
              "PromotionEndDate" IS NULL
              OR "PromotionStartDate" IS NULL
              OR "PromotionEndDate" >= "PromotionStartDate"
          )
    );


-- ============================================================
-- WEBSITE SETTINGS
-- ============================================================

CREATE TABLE IF NOT EXISTS "WebsiteSettings" (
    "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ClientId" uuid NOT NULL,
    "WebsiteName" text,
    "WebsiteLogoUrl" text,
    "FaviconUrl" text,
    "PrimaryColor" text,
    "SecondaryColor" text,
    "ContactEmail" text,
    "ContactPhone" text,
    "WhatsAppNumber" text,
    "Address" text,
    "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),
    "DateUpdatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "UQ_WebsiteSettings_ClientId"
    UNIQUE ("ClientId"),

    CONSTRAINT "FK_WebsiteSettings_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE
    );


-- ============================================================
-- NOTIFICATION
-- ============================================================

CREATE TABLE IF NOT EXISTS "Notification" (
      "Id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      "ClientId" uuid NOT NULL,
      "Title" text NOT NULL,
      "Message" text NOT NULL,
      "NotificationType" text,
      "IsRead" boolean NOT NULL DEFAULT false,
      "DateCreatedOn" timestamptz NOT NULL DEFAULT now(),

    CONSTRAINT "FK_Notification_Client"
    FOREIGN KEY ("ClientId")
    REFERENCES "Client" ("Guid")
    ON DELETE CASCADE
    );


-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS "IX_Client_BusinessId"
    ON "Client" ("BusinessId");

CREATE INDEX IF NOT EXISTS "IX_Client_StatusId"
    ON "Client" ("StatusId");

CREATE INDEX IF NOT EXISTS "IX_ClientAccount_AuthUserId"
    ON "ClientAccount" ("AuthUserId");

CREATE INDEX IF NOT EXISTS "IX_ClientAgreement_ClientId"
    ON "ClientAgreement" ("ClientId");

CREATE INDEX IF NOT EXISTS "IX_ClientAgreement_StatusId"
    ON "ClientAgreement" ("StatusId");

CREATE INDEX IF NOT EXISTS "IX_ClientAgreementDocument_AgreementId"
    ON "ClientAgreementDocument" ("ClientAgreementId");

CREATE INDEX IF NOT EXISTS "IX_ClientService_AgreementId"
    ON "ClientService" ("ClientAgreementId");

CREATE INDEX IF NOT EXISTS "IX_Billing_ClientId"
    ON "Billing" ("ClientId");

CREATE INDEX IF NOT EXISTS "IX_Billing_AgreementId"
    ON "Billing" ("ClientAgreementId");

CREATE INDEX IF NOT EXISTS "IX_Invoice_BillingId"
    ON "Invoice" ("BillingId");

CREATE INDEX IF NOT EXISTS "IX_Invoice_StatusId"
    ON "Invoice" ("InvoiceStatusId");

CREATE INDEX IF NOT EXISTS "IX_Invoice_DueDate"
    ON "Invoice" ("DueDate");

CREATE INDEX IF NOT EXISTS "IX_Payment_InvoiceId"
    ON "Payment" ("InvoiceId");

CREATE INDEX IF NOT EXISTS "IX_Payment_ClientId"
    ON "Payment" ("ClientId");

CREATE INDEX IF NOT EXISTS "IX_Events_ClientId"
    ON "Events" ("ClientId");

CREATE INDEX IF NOT EXISTS "IX_Events_EventDate"
    ON "Events" ("EventDate");

CREATE INDEX IF NOT EXISTS "IX_Gallery_ClientId"
    ON "Gallery" ("ClientId");

CREATE INDEX IF NOT EXISTS "IX_Gallery_CategoryId"
    ON "Gallery" ("GalleryCategoryId");

CREATE INDEX IF NOT EXISTS "IX_Promotion_ClientId"
    ON "Promotion" ("ClientId");

CREATE INDEX IF NOT EXISTS "IX_Promotion_StartEndDate"
    ON "Promotion" ("PromotionStartDate", "PromotionEndDate");

CREATE INDEX IF NOT EXISTS "IX_Notification_ClientId"
    ON "Notification" ("ClientId");

CREATE INDEX IF NOT EXISTS "IX_Notification_Unread"
    ON "Notification" ("ClientId", "IsRead");


-- ============================================================
-- SEED BASIC STATUS VALUES
-- ============================================================

INSERT INTO "Status" ("Status")
VALUES
    ('Active'),
    ('Inactive'),
    ('Pending'),
    ('Completed'),
    ('Paid'),
    ('Overdue'),
    ('Cancelled'),
    ('Draft'),
    ('Published')
    ON CONFLICT ("Status") DO NOTHING;


-- ============================================================
-- SEED BILLING CYCLES
-- ============================================================

INSERT INTO "BillingCycle" ("Name", "Description")
VALUES
    ('Monthly', 'Billing occurs every month'),
    ('Quarterly', 'Billing occurs every three months'),
    ('Biannually', 'Billing occurs every six months'),
    ('Annually', 'Billing occurs once per year'),
    ('One-Time', 'Single payment')
    ON CONFLICT ("Name") DO NOTHING;


-- ============================================================
-- SEED PAYMENT METHODS
-- ============================================================

INSERT INTO "PaymentMethod" ("Name", "Description")
VALUES
    ('Bank Transfer', 'Payment made via bank transfer'),
    ('Credit Card', 'Payment made using a credit card'),
    ('Debit Card', 'Payment made using a debit card'),
    ('Cash', 'Cash payment'),
    ('Other', 'Other payment method')
    ON CONFLICT ("Name") DO NOTHING;


-- ============================================================
-- SEED GALLERY CATEGORIES
-- ============================================================

-- INSERT INTO "GalleryCategory" ("Name", "Description")
-- VALUES
--     ('General', 'General gallery images'),
--     ('Products', 'Product images'),
--     ('Services', 'Service-related images'),
--     ('Events', 'Event-related images')
--     ON CONFLICT ("Name") DO NOTHING;


-- ============================================================
-- SEED PROMOTION TYPES
-- ============================================================

INSERT INTO "PromotionType" ("PromoType")
VALUES
    ('Percentage Discount'),
    ('Fixed Amount Discount'),
    ('Special Offer'),
    ('Seasonal Promotion'),
    ('Limited Time Offer')
    ON CONFLICT ("PromoType") DO NOTHING;