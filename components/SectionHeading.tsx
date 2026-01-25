
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-24 ${centered ? 'text-center' : ''}`}>
    <h2 className="title-brutalist title-transition text-5xl md:text-8xl mb-6">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[#C4A484] text-xs font-black uppercase tracking-[0.4em]">
        {subtitle}
      </p>
    )}
    <div className={`h-px w-24 bg-charcoal/20 mt-12 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

export default SectionHeading;
