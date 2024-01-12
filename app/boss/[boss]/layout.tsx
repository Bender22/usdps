import React from 'react'

export default function BossLayout({
  children
}: {
	children: React.ReactNode;
}) {
  return (
		<section>
			<div>
				{children}
			</div>
		</section>
  )
}
