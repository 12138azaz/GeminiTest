import React from 'react';
import { 
  Cpu, 
  Globe, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Menu, 
  X, 
  ChevronRight, 
  MessageSquare, 
  Send, 
  Loader2,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

export const Icons = {
  Cpu,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Menu,
  X,
  ChevronRight,
  MessageSquare,
  Send,
  Loader2,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone
};

export type IconName = keyof typeof Icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const LucideIcon = Icons[name] as React.ElementType;
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
};