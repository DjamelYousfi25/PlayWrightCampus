import { test, expect } from '@playwright/test';

test.describe('Création Chercheur', ()=>{
  test('Chercheur biologie 1', async ({ page }) => {
    await page.goto('https://www.campusfrance.org/fr/user/register');
    await page.getByRole('button', { name: 'Tout accepter' }).click();
    await page.getByPlaceholder('monadresse@domaine.com').click();
    await page.getByPlaceholder('monadresse@domaine.com').fill('mail@mail.com');
    await page.getByRole('textbox', { name: 'Mon mot de passe*' }).click();
    await page.getByRole('textbox', { name: 'Mon mot de passe*' }).fill('12456');
    await page.getByText('Confirmer le mot de passe Concordance des mots de passe :').click();
    await page.getByLabel('Confirmer le mot de passe').click();
    await page.getByLabel('Confirmer le mot de passe').fill('123465');
    await page.getByText('Mme', { exact: true }).click();
    await page.getByLabel('Nom', { exact: true }).click();
    await page.getByLabel('Nom', { exact: true }).fill('you');
    await page.getByLabel('Prénom').click();
    await page.getByLabel('Prénom').fill('djam');
    await page.getByText('- Choisir une valeur -').nth(1).click();
    await page.getByText('-Angola').click();
    await page.getByLabel('Pays de nationalité (valeur 1)').click();
    await page.getByLabel('Pays de nationalité (valeur 1)').fill('france');
    await page.getByText('France', { exact: true }).click();
    await page.getByLabel('Code postal').click();
    await page.getByLabel('Code postal').fill('75001');
    await page.locator('#edit-field-publics-cibles').getByText('Étudiants').click();
    await page.locator('#edit-field-domaine-etudes-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
    await page.getByText('Agriculture - agroalimentaire').click();
    await page.locator('#edit-field-niveaux-etude-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
    await page.getByText('Licence 1').click();
    await page.getByText('J’accepte que mes données').click();
    await expect(page.locator('#edit-submit')).toContainText('Créer un compte');
  });
  test('Chercheur biologie 2', async ({ page }) => {
    await page.goto('https://www.campusfrance.org/fr/user/register');
    await page.getByRole('button', { name: 'Tout accepter' }).click();
    await page.getByPlaceholder('monadresse@domaine.com').click();
    await page.getByPlaceholder('monadresse@domaine.com').fill('mail@mail.com');
    await page.getByRole('textbox', { name: 'Mon mot de passe*' }).click();
    await page.getByRole('textbox', { name: 'Mon mot de passe*' }).fill('12456');
    await page.getByText('Confirmer le mot de passe Concordance des mots de passe :').click();
    await page.getByLabel('Confirmer le mot de passe').click();
    await page.getByLabel('Confirmer le mot de passe').fill('123465');
    await page.getByText('Mme', { exact: true }).click();
    await page.getByLabel('Nom', { exact: true }).click();
    await page.getByLabel('Nom', { exact: true }).fill('you');
    await page.getByLabel('Prénom').click();
    await page.getByLabel('Prénom').fill('djam');
    await page.getByText('- Choisir une valeur -').nth(1).click();
    await page.getByText('-Angola').click();
    await page.getByLabel('Pays de nationalité (valeur 1)').click();
    await page.getByLabel('Pays de nationalité (valeur 1)').fill('france');
    await page.getByText('France', { exact: true }).click();
    await page.getByLabel('Code postal').click();
    await page.getByLabel('Code postal').fill('75001');
    await page.locator('#edit-field-publics-cibles').getByText('Étudiants').click();
    await page.locator('#edit-field-domaine-etudes-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
    await page.getByText('Agriculture - agroalimentaire').click();
    await page.locator('#edit-field-niveaux-etude-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
    await page.getByText('Licence 2').click();
    await page.getByText('J’accepte que mes données').click();
    await expect(page.locator('#edit-submit')).toContainText('Créer un compte');
  });


})

