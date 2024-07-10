import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Home = () => {
    const loggedIn = {firstName: 'João', lastName: 'Victor', email: 'joaov@gamil.com'};

    return (
        <section className="home">
            <div className='home-content'>
                <header className='home-header'>
                   <HeaderBox 
                    type='greeting'
                    title='Bem-vindo'
                    user={loggedIn?.firstName || 'Guest'} 
                    subtext='Acesse e controle sua conta e transações de maneira eficiente.'

                   />

                   <TotalBalanceBox 
                    accounts={[]}
                    totalBanks = {1}
                    totalCurrentBalance={1500.65}
                   />
                </header>

                Transações Recentes
            </div>
                <RightSidebar
                    user={loggedIn}
                    transactions={[]}
                    banks={[{currentBalance: 150.4}, {currentBalance: 200.1}]}
                />
        </section>
    )
}

export default Home