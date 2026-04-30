import type { SVGProps } from 'react';

const baseProps: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H11v15H4.5A1.5 1.5 0 0 1 3 17.5Z" />
      <path d="M21 5.5A1.5 1.5 0 0 0 19.5 4H13v15h6.5a1.5 1.5 0 0 0 1.5-1.5Z" />
      <path d="M11 4v15" />
      <circle cx="17" cy="11" r="2.6" />
      <path d="M17 8.4v-.5M17 14.1v.5M19.6 11h.5M14.4 11h-.5" />
      <path d="M5.5 8h3M5.5 11h3M5.5 14h3" />
    </svg>
  );
}

function PermisBIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.2" />
      <rect x="5" y="8" width="5" height="6" rx="0.6" />
      <path d="M12.5 9h6M12.5 12h6M12.5 15h4" />
      <path d="M15.5 18.5c0-.7.5-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2" />
    </svg>
  );
}

function PermisAccelereIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 16h2.5l1.2-3.6a2 2 0 0 1 1.9-1.4h6a2 2 0 0 1 1.7 1l1.7 2.9c.3.5.5 1 .5 1.6V17a1 1 0 0 1-1 1h-1.5" />
      <circle cx="8" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
      <path d="M9.6 18h5.3" />
      <path d="M2 9l3-1.5M2 12h3" />
      <path d="M13.5 4.5 11 8.5h2.2L11.7 12l3.6-4.5h-2.2L14.6 4.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ConduiteAccompagneeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="8" cy="6.5" r="2.4" />
      <circle cx="16" cy="6.5" r="2.4" />
      <path d="M3 14c0-2 2.2-3.5 5-3.5s5 1.5 5 3.5" />
      <path d="M11 14c0-2 2.2-3.5 5-3.5s5 1.5 5 3.5" />
      <circle cx="12" cy="18.5" r="3.2" />
      <path d="M12 16.5v.6M12 19.9v.6M14 18.5h.6M9.4 18.5h.6" />
      <path d="M10.4 16.9 13.6 20.1M13.6 16.9 10.4 20.1" />
    </svg>
  );
}

function StagePointsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20 12a8 8 0 1 1-2.8-6.1" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M12 8.5v3.5l2.5 1.5" />
      <path d="M9.2 17.5h.6M11.7 17.5h.6M14.2 17.5h.6M16.7 17.5h.6" />
    </svg>
  );
}

function CentreFormationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M2.5 8.5 12 4l9.5 4.5L12 13Z" />
      <path d="M6 11v4.2c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8V11" />
      <path d="M21.5 8.5V13" />
      <path d="M21.5 13.5a1.2 1.2 0 0 0-1 1.8l1 1.7 1-1.7a1.2 1.2 0 0 0-1-1.8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PerfectionnementIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="10" cy="13" r="6.5" />
      <circle cx="10" cy="13" r="2" />
      <path d="M10 6.5v3M10 16.5v3M3.5 13h3M13.5 13h3" />
      <path d="M16 8.5 21 3.5" />
      <path d="M17 3.5h4v4" />
    </svg>
  );
}

function EvaluationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="5" y="4.5" width="14" height="17" rx="1.8" />
      <rect x="9" y="2.8" width="6" height="3.4" rx="0.8" />
      <path d="M8.5 12l2 2 4.5-4.5" />
      <path d="M8.5 17.5h7" />
    </svg>
  );
}

const iconBySlug: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  'code-de-la-route': CodeIcon,
  'permis-b': PermisBIcon,
  'permis-b-accelere': PermisAccelereIcon,
  'conduite-accompagnee': ConduiteAccompagneeIcon,
  'stage-recuperation-points': StagePointsIcon,
  'formation-moniteur': CentreFormationIcon,
  perfectionnement: PerfectionnementIcon,
  'evaluation-initiale': EvaluationIcon,
};

interface FormationIconProps extends SVGProps<SVGSVGElement> {
  slug: string;
}

export function FormationIcon({ slug, ...props }: FormationIconProps) {
  const Icon = iconBySlug[slug] ?? PermisBIcon;
  return <Icon {...props} />;
}
