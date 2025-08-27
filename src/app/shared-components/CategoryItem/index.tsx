import { LucideIcon } from 'lucide-react';

interface CategoryItemProps {
    icon: LucideIcon | string;
    label: string;
    active: boolean;
}

const CategoryItem = ({ icon, label, active }: CategoryItemProps) => {
    const renderIcon = () => {
        if (typeof icon === 'string') {
            return <i className={`fas fa-${icon} text-xl`}></i>;
        } else {
            const IconComponent = icon;
            return <IconComponent className="w-[56px] h-[56px]" />;
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer ${active ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:border-red-500'}`}>
            {renderIcon()}
            <span className="text-md mt-5">{label}</span>
        </div>
    );
};

export default CategoryItem;