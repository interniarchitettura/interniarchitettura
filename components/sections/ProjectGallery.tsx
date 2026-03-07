'use client';

import { useRef } from 'react';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import type { Project } from '@/data/projects';
import { gsap, useGSAP } from '@/lib/gsap';
import type { ImageDimensions } from '@/lib/image-dimensions';

type Row =
  | { type: 'full'; index: number }
  | { type: 'pair'; indices: [number, number] }
  | { type: 'single-portrait'; index: number };

function buildRows(dims: ImageDimensions[]): Row[] {
  const rows: Row[] = [];
  let i = 0;

  while (i < dims.length) {
    const ratio = dims[i].w / dims[i].h;
    const isPortrait = ratio < 1;

    if (isPortrait) {
      if (i + 1 < dims.length) {
        rows.push({ type: 'pair', indices: [i, i + 1] });
        i += 2;
      } else {
        rows.push({ type: 'single-portrait', index: i });
        i++;
      }
      continue;
    }

    if (i + 1 < dims.length && dims[i + 1].w / dims[i + 1].h >= 1) {
      rows.push({ type: 'pair', indices: [i, i + 1] });
      i += 2;
    } else {
      rows.push({ type: 'full', index: i });
      i++;
    }
  }

  return rows;
}

export default function ProjectGallery({
  project,
  dimensions,
}: {
  project: Project;
  dimensions: ImageDimensions[];
}) {
  const t = useTranslations('projects');
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!galleryRef.current) return;

      const images = galleryRef.current.querySelectorAll('.gallery-image');

      images.forEach(img => {
        gsap.from(img, {
          y: 60,
          opacity: 0,
          scale: 0.98,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { scope: galleryRef }
  );

  const getAlt = (index: number) =>
    t.has(`items.${project.slug}.alts.${index}`)
      ? t(`items.${project.slug}.alts.${index}`)
      : `${t(`items.${project.slug}.title`)} - ${index + 1}`;

  const rows = buildRows(dimensions);

  return (
    <section className='bg-background py-8 md:py-12'>
      <div ref={galleryRef} className='container space-y-3'>
        {rows.map((row, rowIdx) => {
          if (row.type === 'full') {
            const { index } = row;
            const d = dimensions[index];
            return (
              <div key={rowIdx} className='gallery-image'>
                <Image
                  src={project.images[index]}
                  alt={getAlt(index)}
                  width={d.w}
                  height={d.h}
                  className='h-auto w-full'
                  sizes='100vw'
                />
              </div>
            );
          }

          if (row.type === 'pair') {
            const [a, b] = row.indices;
            const rA = dimensions[a].w / dimensions[a].h;
            const rB = dimensions[b].w / dimensions[b].h;

            return (
              <div key={rowIdx} className='flex flex-col gap-3 md:flex-row'>
                <div className='gallery-image md:min-w-0' style={{ flex: rA }}>
                  <Image
                    src={project.images[a]}
                    alt={getAlt(a)}
                    width={dimensions[a].w}
                    height={dimensions[a].h}
                    className='h-auto w-full'
                    sizes={`(max-width: 768px) 100vw, ${Math.round((rA / (rA + rB)) * 100)}vw`}
                  />
                </div>
                <div className='gallery-image md:min-w-0' style={{ flex: rB }}>
                  <Image
                    src={project.images[b]}
                    alt={getAlt(b)}
                    width={dimensions[b].w}
                    height={dimensions[b].h}
                    className='h-auto w-full'
                    sizes={`(max-width: 768px) 100vw, ${Math.round((rB / (rA + rB)) * 100)}vw`}
                  />
                </div>
              </div>
            );
          }

          if (row.type === 'single-portrait') {
            const { index } = row;
            const d = dimensions[index];
            return (
              <div
                key={rowIdx}
                className='gallery-image mx-auto w-full md:w-1/2'
              >
                <Image
                  src={project.images[index]}
                  alt={getAlt(index)}
                  width={d.w}
                  height={d.h}
                  className='h-auto w-full'
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
            );
          }

          return null;
        })}

        {project.materials && project.materials.length > 0 && (
          <div className='pt-12'>
            <h3 className='mb-4 font-text text-xs font-light tracking-[0.2em] text-gray-400 uppercase'>
              {t('materials')}
            </h3>
            <ul className='space-y-1'>
              {project.materials.map((material, i) => (
                <li
                  key={i}
                  className='font-text text-sm font-light text-gray-600'
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
