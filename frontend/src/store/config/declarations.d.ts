declare module 'redux-persist/lib/storage' {
    // You can explicitly type the storage here if needed or just declare it as any
    const storage: any;
    export default storage;
  }

declare module 'redux-persist/lib/stateReconciler/hardSet' {
  // Explicitly type the hardSet state reconciler or use `any`
  const hardSet: any;
  export default hardSet;
}
  
  