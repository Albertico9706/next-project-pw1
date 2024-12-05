-- AlterTable
CREATE SEQUENCE job_id_seq;
ALTER TABLE "Job" ALTER COLUMN "id" SET DEFAULT nextval('job_id_seq');
ALTER SEQUENCE job_id_seq OWNED BY "Job"."id";
