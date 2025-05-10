# EcoSense Data

A real-time environmental monitoring dashboard that displays gas, humidity, and temperature data from a Firebase Realtime Database.

## Features

- Real-time data synchronization with Firebase
- Interactive visualizations for environmental metrics
- Responsive dashboard layout
- Color-coded status indicators based on thresholds
- Historical data trends

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and add your Firebase configuration
4. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Database Structure

The application expects the following structure in your Firebase Realtime Database:

```
/sensors
  /temperature
    value: number
    unit: string
    timestamp: number
  /humidity
    value: number
    unit: string
    timestamp: number
  /gas
    value: number
    unit: string
    timestamp: number
```

## Technologies Used

- React
- TypeScript
- Firebase Realtime Database
- Tailwind CSS
- Recharts for data visualization
- date-fns for date formatting
- Lucide React for icons

## License

MIT