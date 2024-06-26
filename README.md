# Skill-UP

## About

Skill-UP is a part of a learning management system application where teachers/lecturers/mentors and students/learners are connected.

## User Roles

### Teacher

As a teacher, you can:
- **Manage** almost everything.
- **Create** rooms and **enroll** students.
- **Make** announcements.
- **Add** assignments.
- **Upload** any file as a resource.

### Student

As a student, you can:
- Join rooms created by teachers.
- **Search** and **request** enrollment.
- After enrollment, **access** all uploaded resources and assignments provided by the teacher.

## Technical Details

### Stack

- **Next.JS** 14 (for core)
- **Tailwind CSS** (for styling)
- **TypeScript** (for type safety)
- **Framer Motion** (for animations)
- Vercel **PostgreSQL** (for database)
- Vercel **BlobStorage** (for file storage)

### Features

- Theme change
- Multi-language support (GE/EN)
- Secured dashboard and its sub-pages using **middleware** and **JWT** (Jose lib.) token
- Customer profile modification
- **Room** creation/management
- **Assignment** management
- **Resource** upload/download
- Posting **announcements**
- Commenting system
- Like/Reviewing system

*All mentioned functionalities are restricted and conditionally shown depending on the user role - teacher or student.*

## Project

This project was developed as part of the REACT Accelerator course at [TBC IT Academy](https://www.tbcacademy.ge/), funded by [USAID](https://www.usaid.gov/).
