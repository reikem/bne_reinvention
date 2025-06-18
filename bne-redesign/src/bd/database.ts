import { FileText, TrendingUp, Users, Building2, Shield, Search } from "lucide-react";

export const stats = [
    { label: "Ofertas de empleo", value: "81.545", icon: FileText },
    { label: "Vacantes", value: "500.875", icon: TrendingUp },
    { label: "Usuarios registrados", value: "5.231.046", icon: Users },
    { label: "Empresas registradas", value: "110.441", icon: Building2 },
];
export const services = [
    {
        title: "Buscar Empleo",
        description: "Encuentra oportunidades laborales que se adapten a tu perfil",
        icon: Search,
        color: "bg-blue-500",
    },
    {
        title: "Certificación Seguro de Cesantía",
        description: "Obtén tu certificación de manera rápida y segura",
        icon: Shield,
        color: "bg-green-500",
    },
    {
        title: "Orientación Laboral",
        description: "Recibe asesoría personalizada para tu carrera profesional",
        icon: Users,
        color: "bg-purple-500",
    },
    {
        title: "Capacitaciones",
        description: "Mejora tus habilidades con nuestros programas de formación",
        icon: TrendingUp,
        color: "bg-orange-500",
    },
];
