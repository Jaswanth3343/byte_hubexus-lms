
export enum Role {
  Student = 'Student',
  Teacher = 'Teacher',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  duration: string;
  points?: number;
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
}

export interface CourseMaterial {
  id: string;
  courseId: string;
  name: string;
  url: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  content: string;
  submittedDate: string;
  grade?: number;
}
