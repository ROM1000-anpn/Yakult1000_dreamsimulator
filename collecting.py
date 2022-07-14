from selenium import webdriver
import time
driver = webdriver.Chrome('./chromedriver')

driver.get('https://coromoo.com/question/182117?sort=new') # コロモー
time.sleep(10)
coromoElm = driver.find_elements_by_css_selector('.comment-title > h2')
for i in coromoElm:
  print(i.text)

driver.get('https://twitter.com/search?q=%E3%83%A4%E3%82%AF%E3%83%AB%E3%83%881000%20%E6%82%AA%E5%A4%A2%20%E5%86%85%E5%AE%B9&src=typed_query&f=live') # Twitter
time.sleep(5)
driver.execute_script('window.scrollTo(0, 3000);')
time.sleep(10)
twitterElm = driver.find_elements_by_xpath('//div[@data-testid="tweetText"]')
for j in twitterElm:
  print(j.text)
