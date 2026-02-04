import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ylajisfpzyuxtlkcknxu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYWppc2Zwenl1eHRsa2Nrbnh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNjY1NzMsImV4cCI6MjA4NTc0MjU3M30.v-qrjBBqTcWwUmb-A47tNKGQ6O9q5t4a1XMzq6VDSOk";

export const supabase = createClient(supabaseUrl, supabaseKey)