import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uxrzbampyqvxtocripue.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cnpiYW1weXF2eHRvY3JpcHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MzI1NTQsImV4cCI6MTk5NTUwODU1NH0.ZugJQf_dOTHK4oEV7Qbx8tWIQmp60PR7EUTPrCiHLuA"
export const supabaseClient = createClient(supabaseUrl, supabaseKey)
