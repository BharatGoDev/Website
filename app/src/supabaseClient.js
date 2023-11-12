import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mupgodvuvgigvdiulqdq.supabase.co' ;
const supabasekey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11cGdvZHZ1dmdpZ3ZkaXVscWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MDM2MjgsImV4cCI6MjAxNTI3OTYyOH0.RWk6GJztY4gY9pDISZ0CVS9i4fhHuTpBuLJAQfbvwVk';

export const supabase = createClient(supabaseUrl, supabasekey)
