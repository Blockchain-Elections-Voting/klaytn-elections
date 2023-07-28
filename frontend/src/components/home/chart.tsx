/**
 * @since 2023/07/28
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

'use client'

import { useEffect, useRef } from 'react'

export interface ChartDemoProps {
  label?: string
  labels?: string[]
  data?: number[]
}

const ChartDemo = (props: ChartDemoProps) => {
  const ref = useRef(null)
  const dataBarCustomOptions = {
    type: 'bar',
    data: {
      labels: props.labels || ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: props.label || 'PGV',
          data: props.data || [30, 15, 62, 65, 61],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  }

  const optionsBarCustomOptions = {
    options: {
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'green',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#4285F4',
          },
        },
        y: {
          ticks: {
            color: '#f44242',
          },
        },
      },
    },
  }

  useEffect(() => {
    const init = async () => {
      const { Chart } = await import('tw-elements')
      new Chart(ref.current, dataBarCustomOptions, optionsBarCustomOptions)
    }
    init()
  }, [])

  return (
    <div className="z-10 mx-auto w-3/5 overflow-hidden">
      <canvas ref={ref} id="bar-chart-custom-options"></canvas>
    </div>
  )
}

export default ChartDemo
