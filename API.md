# 接口文档

## 类
### Topic
```java
public class Topic {
    public int Id;
    public long ParticipantCount; // 参与人数
    public Date createdTime; // 发起时间
    public String Title;
    public Date ExpireTimeForCurrentRound; // 当前轮截止时间
    public Enum Type; // 类型
    public String Description; // 描述信息
    public Enum status; // 状态，Active/Deleted/...
}
```
### Reward
```java
public class Reward {
    public int Id;
    public int UserId;
    public int TopicId;
    public long Money;
    public int RoundId; // 本单奖励来自哪一轮训练
    public Enum status; // 状态，Generated/Sended/...
}
```
### Scenario
```java
public class Scenario {
    public int Id;
    public String Description;
}
```
### Statement
```java
public class Statement {
    public int Id;
    public int Content;
    public int TopicId;
    public int ScenarioId;
    public int Number; // 这句话在scenario里面的序号，第几句话
}
```
### Alignment
### User
```java
public class User {
    public int Id;
    public string name;
    public string address; // 钱包地址
    public Enum status; // 状态，Active/Deleted/...
}
```


## 首页
### 获取热门topic
```typescript
{
    Method: "GET",
    Url: "/api/hottopic",
    Params: {
        limit: number, // 获取的topic的数量
        offset: number = 0, // 从第几个开始取
    }
    Response: {
        Topics: array<Topic>,
    }
}
```
### 获取前几名reward
```typescript
{
    Method: "GET",
    Url: "/api/reward",
    Params: {
        limit: number,
    }
    Response: {
        Topics: array<Reward>,
    }
}
```
## Topic
### 获取我的topic列表
```typescript
{
    Method: "GET",
    Url: "/api/mytopic",
    Params: {
        userId: number,
        address: string, // 用户的钱包地址
        limit: number,
    }
    Response: {
        Topics: array<Topic>,
    }
}
```
### 获取所有topic，可搜索
### 添加我的Topic

## Score
### 获取Alignment列表
### 提交评分

## Reward
### 获取我的奖励列表