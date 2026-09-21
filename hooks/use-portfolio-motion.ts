'use client';

import { type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function usePortfolioMotion(
  scope: RefObject<HTMLElement | null>,
  paused: boolean,
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const select = gsap.utils.selector(root);
      const video = root.querySelector<HTMLVideoElement>('.hero-media');
      const media = gsap.matchMedia();

      media.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 981px)',
          pointer: '(hover: hover) and (pointer: fine)',
        },
        (context) => {
          const { motion, desktop, pointer } = context.conditions!;
          if (!motion || paused) {
            video?.pause();
            return;
          }

          const distance = desktop ? 64 : 28;
          const removers: Array<() => void> = [];
          const loops: Array<{
            animation: gsap.core.Tween;
            trigger: ScrollTrigger;
          }> = [];

          // Loops only run while their section is visible and the tab is active.
          const ambient = (animation: gsap.core.Tween, trigger: string) => {
            const gate = ScrollTrigger.create({
              trigger: select(trigger)[0],
              start: 'top bottom',
              end: 'bottom top',
              onToggle: (self) =>
                animation.paused(!self.isActive || document.hidden),
            });
            animation.paused(!gate.isActive || document.hidden);
            loops.push({ animation, trigger: gate });
          };

          gsap.fromTo(
            '.scroll-progress',
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
              },
            },
          );

          const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
          entrance
            .from('.site-header-inner > *', {
              y: -18,
              opacity: 0,
              stagger: 0.08,
              duration: 0.7,
              clearProps: 'transform,opacity',
            })
            .from('.hero-eyebrow', { y: 18, opacity: 0, duration: 0.7 }, 0.15)
            .from(
              '.hero-line',
              {
                yPercent: 115,
                rotation: 5,
                stagger: 0.16,
                duration: 1.3,
                transformOrigin: 'left bottom',
              },
              0.25,
            )
            .from(
              '.hero-copy, .hero-cta, .hero-status',
              {
                y: 24,
                opacity: 0,
                stagger: 0.13,
                duration: 0.8,
                clearProps: 'transform,opacity',
              },
              0.85,
            );

          gsap.to('.hero-media', {
            scale: 1.16,
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-wrap',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
          gsap.to('.hero-content', {
            y: desktop ? 100 : 35,
            opacity: 0.25,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-wrap',
              start: '25% top',
              end: 'bottom top',
              scrub: 0.7,
            },
          });
          ambient(
            gsap.to('.hero-orbit-one', {
              xPercent: 5,
              yPercent: 9,
              rotation: 9,
              scale: 1.06,
              duration: 8,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            }),
            '.hero-wrap',
          );
          ambient(
            gsap.to('.hero-orbit-two', {
              xPercent: -6,
              rotation: -12,
              scale: 0.94,
              duration: 11,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            }),
            '.hero-wrap',
          );

          const videoGate = ScrollTrigger.create({
            trigger: select('.hero-wrap')[0],
            start: 'top bottom',
            end: 'bottom top',
            onToggle: (self) => {
              if (self.isActive && !document.hidden)
                void video?.play().catch(() => {});
              else video?.pause();
            },
          });
          if (videoGate.isActive && !document.hidden)
            void video?.play().catch(() => {});

          // Sticky copy fills word by word as the reader moves through the chapter.
          gsap.from('.statement-word', {
            backgroundSize: '0% 100%',
            stagger: 0.18,
            ease: 'none',
            scrollTrigger: {
              trigger: '.statement-chapter',
              start: 'top 55%',
              end: '45% 25%',
              scrub: 0.65,
            },
          });
          gsap.from('.inline-mark', {
            rotation: -140,
            scale: 0.35,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: '.statement-title',
              start: 'top 78%',
              end: 'bottom 40%',
              scrub: 1,
            },
          });

          // Shared editorial reveals; cards and the statement have their own choreography.
          select('[data-reveal]').forEach((element: HTMLElement) => {
            gsap.from(element, {
              y: distance * 0.65,
              opacity: 0,
              duration: 0.9,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: { trigger: element, start: 'top 90%', once: true },
            });
          });

          gsap.from('.project-card', {
            y: distance,
            rotation: desktop ? 3 : 0,
            opacity: 0,
            stagger: 0.13,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '.card-carousel',
              start: 'top 86%',
              once: true,
            },
          });
          gsap.from('.experience-card', {
            x: desktop ? 85 : 28,
            y: 24,
            opacity: 0,
            stagger: 0.1,
            duration: 0.95,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '.experience-carousel',
              start: 'top 86%',
              once: true,
            },
          });

          ambient(
            gsap.to('.ticker-track', {
              xPercent: -50,
              duration: 26,
              repeat: -1,
              ease: 'none',
            }),
            '.ticker',
          );

          select('.learning-card').forEach(
            (card: HTMLElement, index: number) => {
              gsap
                .timeline({
                  defaults: { ease: 'power3.out' },
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 86%',
                    once: true,
                  },
                  delay: desktop ? index * 0.14 : 0,
                })
                .from(card, {
                  y: distance,
                  rotationX: desktop ? 12 : 0,
                  opacity: 0,
                  duration: 0.9,
                  clearProps: 'transform,opacity',
                })
                .from(
                  card.querySelectorAll('h3, p'),
                  {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.7,
                    clearProps: 'transform,opacity',
                  },
                  0.2,
                )
                .from(
                  card.querySelector('.learning-card-head svg'),
                  {
                    rotation: -80,
                    scale: 0.4,
                    duration: 0.9,
                    ease: 'back.out(1.7)',
                  },
                  0.15,
                )
                .from(
                  card.querySelector('.learning-rail i'),
                  { scaleX: 0, duration: 1.25, ease: 'expo.out' },
                  0.4,
                );
            },
          );

          select('.stack-card').forEach((card: HTMLElement, index: number) => {
            gsap.from(card, {
              y: distance * 0.7,
              scale: 0.92,
              opacity: 0,
              delay: desktop ? (index % 3) * 0.11 : 0,
              duration: 0.85,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: { trigger: card, start: 'top 90%', once: true },
            });
          });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: '.contact-chapter',
                start: 'top 65%',
                end: '40% 25%',
                scrub: 0.8,
              },
            })
            .from('.contact-line', {
              yPercent: 110,
              rotation: 3,
              stagger: 0.18,
              duration: 1,
              ease: 'power2.out',
            })
            .from(
              '.contact-orbit',
              {
                scale: 0.6,
                rotation: -35,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out',
              },
              0,
            );

          gsap.from('.footer-panel', {
            y: 65,
            scale: 0.96,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '.footer-wrap',
              start: 'top 95%',
              once: true,
            },
          });
          gsap.from('.footer-links > div, .footer-base > *', {
            y: 22,
            opacity: 0,
            stagger: 0.08,
            duration: 0.7,
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '.footer-panel',
              start: 'top 80%',
              once: true,
            },
          });

          // Hover timelines are created inside this context and reverted with it.
          if (pointer) {
            select('.project-card').forEach((card: HTMLElement) => {
              const hover = gsap
                .timeline({
                  paused: true,
                  defaults: { duration: 0.65, ease: 'power3.out' },
                })
                .to(card.querySelector('.project-visual'), { scale: 1.035 }, 0)
                .to(
                  card.querySelectorAll(
                    '.visual-disc, .portal-shell, .network-word',
                  ),
                  { y: -12, rotation: 4 },
                  0,
                )
                .to(
                  card.querySelector('.project-card-topline svg'),
                  { x: 5, y: -5 },
                  0,
                );
              const enter = () => {
                hover.play();
              };
              const leave = () => {
                hover.reverse();
              };
              card.addEventListener('pointerenter', enter);
              card.addEventListener('pointerleave', leave);
              card.addEventListener('focus', enter);
              card.addEventListener('blur', leave);
              removers.push(() => {
                card.removeEventListener('pointerenter', enter);
                card.removeEventListener('pointerleave', leave);
                card.removeEventListener('focus', enter);
                card.removeEventListener('blur', leave);
              });
            });

            select('.hero-cta, .contact-button').forEach(
              (button: HTMLElement) => {
                const x = gsap.quickTo(button, 'x', {
                  duration: 0.45,
                  ease: 'power3.out',
                });
                const y = gsap.quickTo(button, 'y', {
                  duration: 0.45,
                  ease: 'power3.out',
                });
                const move = (event: PointerEvent) => {
                  const bounds = button.getBoundingClientRect();
                  x((event.clientX - bounds.left - bounds.width / 2) * 0.15);
                  y((event.clientY - bounds.top - bounds.height / 2) * 0.2);
                };
                const reset = () => {
                  x(0);
                  y(0);
                };
                button.addEventListener('pointermove', move);
                button.addEventListener('pointerleave', reset);
                removers.push(() => {
                  button.removeEventListener('pointermove', move);
                  button.removeEventListener('pointerleave', reset);
                });
              },
            );
          }

          const visibility = () => {
            loops.forEach(({ animation, trigger }) =>
              animation.paused(document.hidden || !trigger.isActive),
            );
            if (document.hidden || !videoGate.isActive) video?.pause();
            else void video?.play().catch(() => {});
          };
          document.addEventListener('visibilitychange', visibility);

          return () => {
            video?.pause();
            removers.forEach((remove) => remove());
            document.removeEventListener('visibilitychange', visibility);
          };
        },
        root,
      );

      return () => media.revert();
    },
    { scope, dependencies: [paused], revertOnUpdate: true },
  );
}
