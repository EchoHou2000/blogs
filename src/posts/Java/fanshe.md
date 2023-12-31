---
date: 2023-10-12
category:
  - Java基础
tag:
  - 重要
star: 10
---

# 掌握Java反射

我们在业务开发中，为一个类设置属性，最常见的是这样的。

```java
User user = new User();
user.setName("Feifei");
```

在这种情况下，初始化一个类之前我们已经知道这是一个什么类了，直接调用构造方法类即可。

但是这是在我们一开始，就知道这是一个什么样的类的前提下，如果我们**不知道这是一个什么样的类，也就没法直接`new`一个对象来调用构造方法了**。这其实就是**反射**的特点。
## 概念

通过反射，能够在**运行时分析类**以及**执行类中方法**，可以获取一个类中所有的属性和方法，还可以调用这些属性和方法。

应用场景比如Spring、Mybatis框架，底层原理都大量应用了反射机制。Spring AOP的JDK动态代理中，也应用了Method的API。

## API

```java
// Class.forName 通过类的包名获取反射类
Class clazz = Class.forName("com.houbingzhi.s39.User");
// 通过Class对象获取构造方法Construct对象
Constructor constructor = clazz.getConstructor();
// 通过Construct对象初始化反射类对象
Object object = constructor.newInstance();
// 获取要调用的方法的Method对象
Method setNameMethod = clazz.getMethod("setName", String.class);
Method getNameMethod = clazz.getMethod("getName");
// 通过invoke方法执行
setNameMethod.invoke(object, "Feifei");
getNameMethod.invoke(object)
```
