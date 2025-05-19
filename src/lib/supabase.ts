import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://nbpsjcvjydppjpkbnqqi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icHNqY3ZqeWRwcGpwa2JucXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NDkwNDAsImV4cCI6MjA2MzIyNTA0MH0.cLa5aSJ-xh4MrObLLRy3MKLVOwCbbCtfIT8sd_la_nI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)