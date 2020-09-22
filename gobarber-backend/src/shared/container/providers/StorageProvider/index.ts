import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';
import DiskStorageprovider from './implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageprovider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
