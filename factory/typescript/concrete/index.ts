// Product
interface IOS {
  type: string;
  version: string;
  install(): string;
  checkDisk(): string;
}
// Concrete Product
class WindowsTen implements IOS {
  type = 'Windows 10';
  version = '1703';


  install(): string {
    const result = 'Windows 10 has been installed';
    return result;
  }

  checkDisk(): string {
    const result = 'It`s okay';
    return result;
  }

}
// Concrete Product
class Ubuntu implements IOS {
  type = 'Ubuntu';
  version = '18.03';

  install(): string {
    const result = 'Successfully';
    return result;
  }

  checkDisk(): string {
    const result = 'You have no disk :)';
    return result;
  }
}

// factory
abstract class Installer {
  static info(system: IOS): string {
    return `Type:${system.type}` + ` Version: ${system.version}`;
  }
  abstract installOS(): IOS;
}

// factory for Windows Ten
class WindowsTenInstaller extends Installer {

  installOS(): IOS {
    return new WindowsTen();
  }

}
// Factory for Ubuntu
class UbuntuInstaller extends Installer {

  installOS(): IOS {
    return new Ubuntu();
  }

}

const windowsInstaller = new WindowsTenInstaller();
const ubuntuInstaller = new UbuntuInstaller();

const windowsEntity = windowsInstaller.installOS();
const ubuntuEntity = ubuntuInstaller.installOS();

console.log(Installer.info(windowsEntity));
console.log(Installer.info(ubuntuEntity));