import React from 'react';

const About = () => {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">О WHITE.T</h1>
          
          <div className="space-y-6 text-gray-700">
            <p>
              Мы верим в силу минимализма. В мире, где все становится сложнее, 
              мы предлагаем простоту и качество.
            </p>
            
            <p>
              WHITE.T — это не просто магазин белых футболок. Это философия. 
              Мы создаем идеальные базовые вещи, которые станут основой вашего гардероба.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Наша миссия</h2>
            <p>
              Избавить вас от необходимости выбирать. Одна идеальная белая футболка 
              заменяет десяток обычных. Мы уделяем внимание каждой детали: от качества 
              хлопка до прочности швов.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Качество</h2>
            <p>
              Мы используем только 100% хлопок высшего качества. Каждая футболка 
              проходит контроль перед отправкой. Мы гарантируем, что наша продукция 
              прослужит вам долгие годы.
            </p>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Контакты</h3>
              <p className="text-gray-600">
                По любым вопросам: support@white-t.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;