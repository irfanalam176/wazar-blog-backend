import { z } from 'zod';
import { UserData } from '../types/userData';
const userSchema = z.object({
  userName: z.string()
    .min(1, { message: "Username is required" })
    .max(50, { message: "Username must be 50 characters or less" }),
  userEmail: z.string()
    .email({ message: "Invalid email address" }),
  userPassword: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" }),
  userRole: z.enum(['admin', 'user', 'auther'], { message: "Role must be one of: admin, user, auther" }),
});



export const validateUser=(userData:UserData)=>{
  const result = userSchema.safeParse(userData);
if (result.success) {
  return(true)
} else {
  return(result.error.errors)
}
}
