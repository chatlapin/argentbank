import React, { useState } from 'react';

const AccountSection = ({ title, amount, description }) => (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button
                className="transaction-button"
                onClick={() => console.log('View transactions clicked')}
            >
                View transactions
            </button>
        </div>
    </section>
);

const UserDashboard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState('Tony Jarvis');

    const accounts = [
        {
            title: 'Argent Bank Checking (x8349)',
            amount: '$2,082.79',
            description: 'Available Balance'
        },
        {
            title: 'Argent Bank Savings (x6712)',
            amount: '$10,928.42',
            description: 'Available Balance'
        },
        {
            title: 'Argent Bank Credit Card (x8349)',
            amount: '$184.30',
            description: 'Current Balance'
        }
    ];

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userName}!</h1>
                <button
                    className="edit-button"
                    onClick={handleEditClick}
                >
                    Edit Name
                </button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <AccountSection
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
};

export default UserDashboard;