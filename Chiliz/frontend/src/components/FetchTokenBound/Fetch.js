import { useAccount, useConnect, useEnsName } from 'wagmi';

function Fetch() {
    const { address, isConnected } = useAccount();
    const { provider } = useConnect();

    return (
        <>
            <section style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#E8F6EF', borderRadius: '15px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
                <h2 style={{ color: '#3CAEA3' }}>The Magical Process

                    !</h2>
                <ol style={{ fontSize: '1.1rem', color: '#333' }}>
                    <li>🔮 Connect your enchanting Chiliz-compatible wallet.</li>
                    <li>✨ Enter the mystical pool by placing a bet of at least 0.1 CHZ.</li>
                    <li>🎩 Wait for the grand sorcerer to cast the dice of destiny and unveil the victor!</li>
                    <li>🌟 If fate smiles upon you, behold! The entire treasure trove shall be bestowed upon your wallet!</li>
                </ol>
            </section>
        </>
    );
}

export default Fetch;
