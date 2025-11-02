import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://defqvnwcyfdpkvlzstlz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZnF2bndjeWZkcGt2bHpzdGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NzY4MTMsImV4cCI6MjA3NjM1MjgxM30.Z8A_dWN6-6JEPTBoLQ5JJmZP-IOiIW_F_YPdmGX5Lkg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  message: string;
  created_at?: string;
}

export interface CareerApplication {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  division: string;
  role: string;
  resume_url: string;
  resume_filename: string;
  created_at?: string;
}
