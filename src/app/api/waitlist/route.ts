import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, refCode, referredBy } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    // Validar que las variables de entorno existan
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error('Faltan credenciales de Google en las variables de entorno (.env)');
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 });
    }

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[0]; // La primera pestaña del Excel

    // Se asume que en el Google Sheet las columnas de la fila 1 (Cabeceras) son: Nombre, Email, Telefono, Fecha, Mi_Codigo, Invitado_Por
    await sheet.addRow({
      Nombre: name,
      Email: email,
      Telefono: `'${phone}`,
      Fecha: new Date().toLocaleString('es-VE'),
      Mi_Codigo: refCode || "",
      Invitado_Por: referredBy || ""
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al guardar en Google Sheets:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
