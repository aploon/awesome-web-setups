import { getSetups } from '@/lib/setup-loader'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const setups = await getSetups()
    console.log('setups from api', setups)
    return NextResponse.json(setups)
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return NextResponse.json({ error: 'Erreur lors du chargement des setups' }, { status: 500 })
  }
} 