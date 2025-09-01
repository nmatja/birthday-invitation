import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://cpyuqpttakfndugwqihl.supabase.co"
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNweXVxcHR0YWtmbmR1Z3dxaWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NDUxOTMsImV4cCI6MjA3MjMyMTE5M30.GDVQFEpzoeeCxbhCM4aZg1pCeMi55lVCW56061bUEms"

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
