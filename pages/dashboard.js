export async function getServerSideProps(context) {
    const { req } = context;
    const cookies = req.headers.cookie || '';
  
    if (!cookies.includes('token=')) {
      return {
        redirect: { destination: '/login', permanent: false }
      };
    }
  
    return { props: {} };
  }
  