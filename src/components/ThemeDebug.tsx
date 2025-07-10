import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const ThemeDebug: React.FC = () => {
  const { theme } = useTheme();
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    setHtmlClass(document.documentElement.className);
    const observer = new MutationObserver(() => {
      setHtmlClass(document.documentElement.className);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }} className="bg-white dark:bg-dark900 text-sapphire dark:text-white border border-sapphire dark:border-dark700 rounded px-4 py-2 shadow-lg text-xs">
      <div><b>Theme:</b> {theme}</div>
      <div><b>&lt;html&gt; class:</b> {htmlClass}</div>
    </div>
  );
};

export default ThemeDebug; 