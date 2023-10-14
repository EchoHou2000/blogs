const t=JSON.parse('{"key":"v-54a7eede","path":"/posts/Java/3.html","title":"HashMap的扩容是怎么实现的","lang":"zh-CN","frontmatter":{"date":"2023-10-14T00:00:00.000Z","category":["Java基础","HashMap"],"tag":["重要","面试"],"description":"HashMap的扩容是怎么实现的 HashMap的底层存储 HashMap的底层是用数组实现的，当需要存储元素的时候，不断put元素进去，达到一定容量后会扩容，一是能存储的元素更多了，二是因为位置多了，查询效率也会更快，之前可能多个元素会通过拉链法放在同一个索引上，查询的时候还需要遍历链表，时间复杂度O(n)，如果位置多了，一个元素占一个索引，查找的时间复杂度就是O(1)。 扩容机制 HashMap的扩容机制是通过resize()方法对数组进行扩容并且重新计算hash值实现的，扩容时会遍历所有元素并且计算hash值，当元素数量多时会比较耗时。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/posts/Java/3.html"}],["meta",{"property":"og:site_name","content":"Echo的学习之路"}],["meta",{"property":"og:title","content":"HashMap的扩容是怎么实现的"}],["meta",{"property":"og:description","content":"HashMap的扩容是怎么实现的 HashMap的底层存储 HashMap的底层是用数组实现的，当需要存储元素的时候，不断put元素进去，达到一定容量后会扩容，一是能存储的元素更多了，二是因为位置多了，查询效率也会更快，之前可能多个元素会通过拉链法放在同一个索引上，查询的时候还需要遍历链表，时间复杂度O(n)，如果位置多了，一个元素占一个索引，查找的时间复杂度就是O(1)。 扩容机制 HashMap的扩容机制是通过resize()方法对数组进行扩容并且重新计算hash值实现的，扩容时会遍历所有元素并且计算hash值，当元素数量多时会比较耗时。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-14T03:11:08.000Z"}],["meta",{"property":"article:author","content":"Echo Hou"}],["meta",{"property":"article:tag","content":"重要"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-14T03:11:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap的扩容是怎么实现的\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-14T03:11:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo Hou\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"HashMap的底层存储","slug":"hashmap的底层存储","link":"#hashmap的底层存储","children":[]},{"level":2,"title":"扩容机制","slug":"扩容机制","link":"#扩容机制","children":[]}],"git":{"createdTime":1696902350000,"updatedTime":1697253068000,"contributors":[{"name":"houbingzhi123","email":"houbingzhi123@gmail.com","commits":3}]},"readingTime":{"minutes":0.75,"words":225},"filePathRelative":"posts/Java/3.md","localizedDate":"2023年10月14日","excerpt":"<h1> HashMap的扩容是怎么实现的</h1>\\n<h2> HashMap的底层存储</h2>\\n<p>HashMap的底层是用数组实现的，当需要存储元素的时候，不断put元素进去，达到一定容量后会扩容，一是能存储的元素更多了，二是因为位置多了，查询效率也会更快，之前可能多个元素会通过<strong>拉链法</strong>放在同一个索引上，查询的时候还需要遍历链表，时间复杂度O(n)，如果位置多了，一个元素占一个索引，查找的时间复杂度就是O(1)。</p>\\n<h2> 扩容机制</h2>\\n<p>HashMap的扩容机制是通过<code>resize()</code>方法对数组进行扩容并且重新计算hash值实现的，扩容时会遍历所有元素并且计算hash值，当元素数量多时会比较耗时。</p>","autoDesc":true}');export{t as data};
