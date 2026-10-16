import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('swiper/react', () => ({
  Swiper: ({ children, id }: { children: React.ReactNode; id?: string }) => <div data-testid="swiper" id={id}>{children}</div>
}))
vi.mock('swiper/modules', () => ({ Navigation: {}, Pagination: {} }))

import { Carousel, CarouselItem } from '..'

describe('Carousel', () => {
  it('renders its slides and navigation buttons', () => {
    render(
      <Carousel>
        <CarouselItem title="Slide 1" description="desc" image={new Blob()} />
      </Carousel>
    )
    expect(screen.getByTestId('swiper')).toBeInTheDocument()
    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('desc')).toBeInTheDocument()
    expect(document.querySelectorAll('button.swiper-button-prev-ex1, button.swiper-button-next-ex1').length).toBe(2)
  })

  it('CarouselItem renders an image with alt text', () => {
    render(<CarouselItem image={new Blob()} />)
    expect(screen.getByAltText('itemImage')).toBeInTheDocument()
  })
})
