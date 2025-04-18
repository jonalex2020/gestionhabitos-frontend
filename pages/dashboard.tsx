import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req } = context;
    const cookies = req.headers.cookie || '';
  
    if (!cookies.includes('token=')) {
      return {
        redirect: { destination: '/login', permanent: false }
      };
    }
  
    return { props: {} };
  }
  
  export default function Dashboard() {
    return (
      <div>
        <h1>Bienvenido al Dashboard</h1>
        {/* Aquí irán los hábitos */}
      </div>
    );
  }
  