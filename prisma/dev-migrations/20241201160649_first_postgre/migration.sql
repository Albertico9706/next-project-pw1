-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'example@gmail.com',
    "password" TEXT NOT NULL DEFAULT 'albe',
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "jobSlug" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "jobGeo" TEXT NOT NULL,
    "jobLevel" TEXT NOT NULL,
    "jobExcerpt" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "pubDate" TEXT NOT NULL,
    "annualSalaryMin" TEXT,
    "annualSalaryMax" TEXT,
    "salaryCurrency" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
