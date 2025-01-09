const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className='w-full h-full flex justify-center flex-col content-center text-white mb-4'>
    <h2 className="mb-2">Ошибка!</h2>
    <p className="mb-4 text-center">{error.message}</p>
    <button onClick={resetErrorBoundary} className="w-full h-11 bg-button rounded-lg mt-2 text-white text-base leading-5 border-none cursor-pointer font-normal">Попробовать снова</button>
  </div>
);

export default ErrorFallback;
