import GameSavingLoader from './gameSavingLoader';

(async () => {
    try {
        const saving = await GameSavingLoader.load();
        console.log(saving);
    } catch (e) {
        console.log(e);
    }
})();