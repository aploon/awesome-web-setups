import { getSetups } from '@/lib/setup-loader'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const setups = await getSetups()
    console.log('API response setups:', {
      isArray: Array.isArray(setups),
      length: setups.length,
      setups
    })
    
    // S'assurer que nous renvoyons bien un tableau
    const setupsArray = Array.isArray(setups) ? setups : []
    
    return NextResponse.json({
      success: true,
      data: setupsArray,
      count: setupsArray.length
    })
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json({
      success: false,
      error: 'Error loading setups',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 