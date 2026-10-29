import {
  Activity,
  AlertTriangle,
  Archive,
  AtSign,
  Award,
  BarChart3,
  Bell,
  Bookmark,
  Box,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Circle,
  CircleHelp,
  Clock,
  Cloud,
  Code2,
  Copy,
  CreditCard,
  Database,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeClosed,
  File,
  FileCode,
  FileImage,
  FileText,
  Flag,
  Flame,
  Folder,
  Gift,
  Globe,
  Grid,
  Heart,
  Home,
  Image,
  Inbox,
  Info,
  Key,
  Layers,
  Lightbulb,
  Link,
  List,
  Lock,
  LogOut,
  Mail,
  Mailbox,
  Map,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  Minus,
  Monitor,
  Moon,
  MoreHorizontal,
  Package,
  Pencil,
  Phone,
  PieChart,
  Play,
  Plus,
  Power,
  RefreshCw,
  Rocket,
  Save,
  Search,
  Send,
  Settings,
  Share,
  Shield,
  ShieldAlert,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Star,
  Sun,
  Tag,
  Target,
  Ticket,
  Trash2,
  TrendingDown,
  TrendingUp,
  Truck,
  Upload,
  User,
  UserPlus,
  UserRound,
  Users,
  Video,
  Wallet,
  Wifi,
  X,
  XCircle,
  Zap,
  type LucideIcon
} from 'lucide-react'
import { DynamicIcon, dynamicIconImports, type IconName } from 'lucide-react/dynamic'
import { createElement, type ReactNode } from 'react'

const ICONS: Record<string, LucideIcon> = {
  Activity,
  AlertTriangle,
  Archive,
  AtSign,
  Award,
  BarChart3,
  Bell,
  Bookmark,
  Box,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Copy,
  CreditCard,
  Database,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeClosed,
  File,
  FileCode,
  FileImage,
  FileText,
  Flag,
  Flame,
  Folder,
  Gift,
  Globe,
  Grid,
  Heart,
  Home,
  Image,
  Inbox,
  Info,
  Key,
  Layers,
  Lightbulb,
  Link,
  List,
  Lock,
  LogOut,
  Mail,
  Mailbox,
  Map,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  Minus,
  Monitor,
  Moon,
  MoreHorizontal,
  Package,
  Pencil,
  Phone,
  PieChart,
  Play,
  Plus,
  Power,
  RefreshCw,
  Rocket,
  Save,
  Search,
  Send,
  Settings,
  Share,
  Shield,
  ShieldAlert,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Star,
  Sun,
  Tag,
  Target,
  Ticket,
  Trash2,
  TrendingDown,
  TrendingUp,
  Truck,
  Upload,
  User,
  UserPlus,
  UserRound,
  Users,
  Video,
  Wallet,
  Wifi,
  X,
  XCircle,
  Zap
}

/**
 * Convierte un nombre de icono de Lucide a kebab-case, el formato canónico de Lucide.
 *
 * Acepta tanto PascalCase (`MessageSquareWarning`) como kebab-case
 * (`message-square-warning`) para que los datos históricos sigan funcionando.
 */
export const normalizeIconName = (name?: string | null): string => {
  if (!name) {
    return ''
  }

  return name
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

const ICONS_BY_KEBAB: Record<string, LucideIcon> = Object.fromEntries(
  Object.entries(ICONS).map(([name, icon]) => [normalizeIconName(name), icon])
)

const isDynamicIconName = (name: string): name is IconName => name in dynamicIconImports

/**
 * Resuelve un icono a partir de su nombre.
 *
 * - Los iconos conocidos salen del registro estático (sin costo extra).
 * - Cualquier otro icono válido de Lucide se carga bajo demanda con `DynamicIcon`,
 *   para que los nombres que llegan de la BD funcionen sin mantener una whitelist.
 * - Un nombre inválido muestra un icono de ayuda visible (nunca un punto invisible).
 * - Un icono vacío muestra un círculo neutro que conserva la alineación.
 */
export const resolveIcon = (name?: string | null, className?: string): ReactNode => {
  const key = normalizeIconName(name)

  if (!key) {
    return createElement(Circle, { className, 'aria-hidden': true })
  }

  const StaticIcon = ICONS[name as string] ?? ICONS_BY_KEBAB[key]

  if (StaticIcon) {
    return createElement(StaticIcon, { className })
  }

  if (!isDynamicIconName(key)) {
    if (import.meta.env.DEV) {
      console.warn(`[resolveIcon] El icono "${name}" no existe en Lucide.`)
    }

    return createElement(CircleHelp, { className })
  }

  return createElement(DynamicIcon, {
    name: key,
    className,
    fallback: () => createElement(Circle, { className, 'aria-hidden': true })
  })
}
