import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { StartupsList} from '@/shared/data/dashboards/startupsdata';
import { Startup } from '@/pages/types';
import StartupDetails from '@/pages/components/startup/details/startupdetails';


const StartupPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [startup, setStartup] = useState<Startup | null>(null);

  useEffect(() => {
    if (id) {
      const startupData = StartupsList.find(startup => startup.id === id);
      if (startupData) {
        setStartup(startupData);
      }
    }
  }, [id]);

  if (!startup) return <p>Loading...</p>;

  return (
    <>
      <div >
        <StartupDetails startup={startup} />
      </div>
    </>
  );
};


StartupPage.layout = "Contentlayout"
export default StartupPage;
