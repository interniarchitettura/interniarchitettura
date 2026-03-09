import Image from 'next/image';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import JsonLd from '@/components/seo/JsonLd';
import TransitionLink from '@/components/ui/TransitionLink';
import { projects } from '@/data/projects';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://interniarchitettura.it';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.projects' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/progetti`,
      languages: {
        it: '/it/progetti',
        en: '/en/progetti',
        'x-default': '/it/progetti',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${siteUrl}/${locale}/progetti`,
      images: [{ url: '/img/1/1.webp', width: 1200, height: 630 }],
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      alternateLocale: locale === 'it' ? 'en_US' : 'it_IT',
      type: 'website',
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'projects' });
  const tMeta = await getTranslations({ locale, namespace: 'meta.projects' });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('sectionTitle'),
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/${locale}/progetti/#webpage`,
    url: `${siteUrl}/${locale}/progetti`,
    name: tMeta('title'),
    description: tMeta('description'),
    inLanguage: locale,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      <Navbar />
      <main>
        <section className='bg-background pt-32 pb-24 md:pt-40 md:pb-32'>
          <div className='container'>
            <h1 className='font-title text-[8vw] leading-none font-light tracking-[0.02em] text-foreground md:text-[4vw]'>
              {t('sectionTitle')}
            </h1>
            <p className='mt-6 max-w-xl font-text text-sm leading-relaxed font-light text-foreground/60 md:text-balance'>
              {tMeta('description')}
            </p>
          </div>
        </section>

        <section className='bg-background pb-24 md:pb-40'>
          <div className='container'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24'>
              {projects.map((project, i) => (
                <TransitionLink
                  key={project.id}
                  href={`/progetti/${project.slug}`}
                  className='group block'
                >
                  <div className='overflow-hidden'>
                    <div
                      className='relative w-full transition-transform duration-500 group-hover:scale-[1.03]'
                      style={{
                        aspectRatio: Math.max(
                          3 / 5,
                          Math.min(2, project.coverRatio)
                        ),
                      }}
                    >
                      <Image
                        src={project.cover}
                        alt={
                          t.has(`items.${project.slug}.alts.0`)
                            ? t(`items.${project.slug}.alts.0`)
                            : t(`items.${project.slug}.title`)
                        }
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        priority={i < 2}
                      />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className='font-text text-xs font-light tracking-[0.2em] text-gray-400 uppercase'>
                      {t(`categories.${project.category}`)} - {project.location}
                      {project.year && ` - ${project.year}`}
                    </p>
                    <h2 className='mt-1.5 font-title text-xl font-light tracking-wider text-foreground transition-colors duration-300 group-hover:text-gray-400 md:text-2xl'>
                      {t(`items.${project.slug}.title`)}
                    </h2>
                    {project.size && (
                      <p className='mt-1 font-text text-xs font-light text-gray-400'>
                        {project.size}
                      </p>
                    )}
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
