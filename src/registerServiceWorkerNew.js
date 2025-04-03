/* eslint-disable no-console */

if ('serviceWorker' in navigator) {
  // Check if the current page is being served in production environment
  if (process.env.NODE_ENV === 'production') {
    // Register the new service worker
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);

        // Check if there's an existing service worker and unregister it
        if (registration.waiting) {
          // If there's a waiting service worker, force it to activate and skip waiting
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        // Handle updates in service worker
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;

          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('New content is available; please refresh.');
                // You can show a notification or prompt user to reload the page
                // Example: Triggering hard reload after service worker update
                window.location.reload(true);
              } else {
                console.log('Content is cached for offline use.');
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });

    // Unregister old service worker if any (this will handle clients with an old service worker)
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => {
        registration.unregister().then(() => {
          console.log('Old Service Worker unregistered.');
        }).catch((error) => {
          console.error('Error during service worker unregistration:', error);
        });
      });
    });
  }
}
