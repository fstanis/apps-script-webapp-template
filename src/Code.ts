const TITLE = 'Demo App';

function doGet(): GoogleAppsScript.HTML.HtmlOutput {
  return render({ name: 'user' });
}

function render(data: Record<string, any>): GoogleAppsScript.HTML.HtmlOutput {
  const template = HtmlService.createTemplateFromFile('index');
  Object.assign(template, data);
  return template.evaluate()
    .setTitle(TITLE)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

Object.assign(globalThis, { doGet }); // prevent tree-shaking
