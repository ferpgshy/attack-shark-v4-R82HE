# attack-shark-v4-R82HE

Distribuição Windows do **Attack Shark Driver v4** (aplicação desktop baseada em Electron) para instalação/execução local.

> Nota importante: este repositório contém a **build já empacotada** (EXE + arquivos do Electron). Ele é ótimo para **rodar, testar e versionar releases**.
> Para **reconstruir** o EXE “do zero” você normalmente precisa do **código-fonte do projeto** (não está presente aqui), além das ferramentas de build.

## O que é a aplicação

O Attack Shark Driver v4 é um app desktop (Windows) para **configuração e gerenciamento** do ecossistema Attack Shark (ex.: periféricos e perfis). Pela estrutura do bundle, ele usa:

- **Electron** (processo principal em `resources/app/dist-electron/main.js`)
- **UI em React** (conteúdo web empacotado em `resources/app/dist/`)
- Integração com o Windows (ex.: ícone na bandeja / “abrir ao iniciar”)

## Como executar

- Executável principal: `Attack Shark Driver v4.exe`
- Desinstalador: `Uninstall Attack Shark Driver v4.exe`

Se você quer apenas usar o app, basta abrir o executável principal.

## Estrutura do repositório (resumo)

- `Attack Shark Driver v4.exe`: executável principal (Electron)
- `Uninstall Attack Shark Driver v4.exe`: desinstalador (quando aplicável)
- `resources/app/`: aplicação Electron “desempacotada”
	- `dist-electron/main.js`: processo principal (cria a janela, tray, IPC, etc.)
	- `dist/`: front-end empacotado (HTML/JS/CSS)
	- `node_modules/`: dependências do runtime
	- `iot_driver.exe`: componente auxiliar (driver/helper) incluído junto ao app

## Build de EXE (visão geral)

Em apps Electron, o processo geralmente é:

1. **Build do front-end** (gera `dist/`)
2. **Build do processo principal** (gera `dist-electron/`)
3. **Empacotamento** (gera um app Windows com `resources/` e binários)
4. **Criação do instalador** (opcional) que, ao instalar, cria também o **desinstalador**

Como este repositório já é a saída final do empacotamento, você tem dois caminhos:

- **A)** reconstruir a partir do **código-fonte original** (recomendado para dev)
- **B)** criar um instalador em cima do binário já pronto (bom para distribuição interna)

## A) Como gerar o EXE a partir do código-fonte (recomendado)

Se você tiver o projeto fonte (normalmente com `src/`, configs de bundler e scripts), a forma mais comum de gerar EXE/instalador no Windows é usando **electron-builder** (ou Electron Forge).

### Pré-requisitos

- Windows 10/11
- Node.js LTS (18+ ou 20+)
- Git (opcional: Git LFS para binários grandes)

### Exemplo com electron-builder

1) No projeto **fonte**, instale dependências e ferramentas de build:

```bash
npm install
npm install --save-dev electron electron-builder
```

2) Adicione scripts no `package.json` do projeto fonte (exemplo):

```json
{
	"main": "dist-electron/main.js",
	"scripts": {
		"dev": "electron .",
		"build": "<seu build do front-end + main>",
		"dist:win:portable": "electron-builder --win portable",
		"dist:win:nsis": "electron-builder --win nsis"
	}
}
```

3) Configure o empacotamento (exemplo mínimo) no `package.json` ou em `electron-builder.yml`:

```json
{
	"build": {
		"appId": "com.attackshark.driver.v4",
		"productName": "Attack Shark Driver v4",
		"files": [
			"dist/**/*",
			"dist-electron/**/*",
			"package.json"
		],
		"extraResources": [
			{
				"from": "resources/app/iot_driver.exe",
				"to": "iot_driver.exe"
			}
		],
		"win": {
			"target": ["portable", "nsis"]
		},
		"nsis": {
			"oneClick": false,
			"perMachine": true,
			"allowToChangeInstallationDirectory": true
		}
	}
}
```

4) Gere os artefatos:

```bash
npm run dist:win:portable
npm run dist:win:nsis
```

### O que você obtém

- **EXE “principal” (portable)**: um executável único (não instala, normalmente não tem desinstalador).
- **Instalador (NSIS)**: um `Setup.exe` que instala o app e cria um **desinstalador** no diretório de instalação.

> Observação: em muitos empacotadores, o “uninstaller” não é um artefato separado no output; ele é **gerado/instalado** junto com o app quando você roda o instalador.

## B) Como gerar instalador/desinstalador a partir desta build (sem fonte)

Se você **não tem o código-fonte**, ainda dá para distribuir “como instalável” usando ferramentas como **Inno Setup** ou **NSIS**, apontando para esta pasta como “conteúdo a instalar”.

### Opção 1: Inno Setup (recomendado para empacotar pastas)

1) Instale o Inno Setup.
2) Crie um script que copie **tudo** desta pasta para `Program Files`.
3) Configure atalhos e um Uninstall.

Isso gera um `Setup.exe` e, após instalar, o Windows terá um desinstalador padrão (listado em “Aplicativos e recursos”).

### Opção 2: NSIS

Processo semelhante ao Inno Setup, mas com mais flexibilidade de script.

## Dicas para releases no GitHub

- Use **Git LFS** para `.exe`, `.dll`, `.pak`, etc. se o repositório crescer muito.
- Publique releases em **GitHub Releases** anexando o instalador (`Setup.exe`) ou o portable (`.exe`).

## Licenças

Este bundle inclui componentes do Electron/Chromium. Veja os arquivos `LICENSE.electron.txt` e `LICENSES.chromium.html`.
