import React, { ReactNode } from 'react';

interface ButtonProps {
    variants?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    label: string;
    isFullWidth?: boolean;
    hasBorder?: boolean;
    onClick?: () => void;
    isDisabled?: boolean;
}
declare const Button: ({ variants, size, label, isFullWidth, hasBorder, isDisabled, ...props }: ButtonProps) => React.JSX.Element;

interface CardProps {
    imageUrl: string;
    name: string;
    onClick: () => void;
    variant: 'purple' | 'yellow' | 'white';
}
declare const Card: ({ imageUrl, name, onClick, variant }: CardProps) => React.JSX.Element;

interface TableProps {
    headers: string[];
    data: any[][];
}
declare const Table: ({ headers, data }: TableProps) => React.JSX.Element;

interface CardDetailsProps {
    name: string;
    imageUrl: string;
    types: string[];
    stats: TableProps;
    weight?: number;
    height?: number;
}
declare const CardDetails: ({ name, imageUrl, types, stats, weight, height }: CardDetailsProps) => React.JSX.Element;

interface HeadingProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size: 'xl' | 'l' | 'm' | 's' | 'xs' | '2xs';
    children?: ReactNode;
    textAlign?: 'left' | 'center' | 'right';
    isBold?: boolean;
    className?: string;
}
declare const Heading: ({ as, children, textAlign, isBold, size, className, }: HeadingProps) => React.JSX.Element;

interface LogoProps {
    onClick?: () => void;
}
declare const Logo: ({ onClick }: LogoProps) => React.JSX.Element;

interface PaginationProps {
    nextLabel: string;
    previousLabel: string;
    handlePageChange: (page: number) => void;
    currentPage: number;
    totalPages: number;
    size?: 'small' | 'medium' | 'large';
}
declare const Pagination: ({ nextLabel, previousLabel, handlePageChange, currentPage, totalPages, size, }: PaginationProps) => React.JSX.Element;

declare const Spinner: () => React.JSX.Element;

export { Button, Card, CardDetails, Heading, Logo, Pagination, Spinner, Table };
