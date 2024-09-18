'use client';

import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Modal from './components/Modal';
import Carousel from './components/Carousel';
import Section from './components/Section';
import LoadingScreen from './components/LoadingScreen';

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

export default function Home() {
  const [page, setPage] = useState<number>(0);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isJobDescriptionOpen, setIsJobDescriptionOpen] = useState<ModalProps | null>(null);
  const [isProjectOpen, setIsProjectOpen] = useState<ModalProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pages = ['Home', 'About', 'Skills', 'Experience', 'Projects'];

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const components = [
    { id: 'welcome', component: <Welcome /> },
    { id: 'about', component: <About /> },
    { id: 'skills', component: <Skills /> },
    { id: 'experience', component: <Experience onClick={setIsJobDescriptionOpen} /> },
    { id: 'projects', component: <Projects onClick={setIsProjectOpen} /> },
  ];

  const sections = components.map(({ id, component }) => (
    <Section key={id} content={component} />
  ));

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="flex w-screen h-screen z-0">
      <NavBar onModalOpen={openContactModal} page={pages[page]} onClick={setPage} />
      <div className="items-center justify-center lg:flex">
        <Carousel items={sections} index={page} nav='bottom' onClick={setPage} />
        {isContactOpen && <Contact onClick={closeContactModal} />}
        {isJobDescriptionOpen && (
          <Modal title={isJobDescriptionOpen.title} onClick={() => setIsJobDescriptionOpen(null)}>
            {isJobDescriptionOpen.children}
          </Modal>
        )}
        {isProjectOpen && (
          <Modal title={isProjectOpen.title} onClick={() => setIsProjectOpen(null)}>
            {isProjectOpen.children}
          </Modal>
        )}
      </div>
    </main>
  );
}
