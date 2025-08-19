// Enhanced FinWise Application JavaScript - Fixed Version

class FinWiseApp {
    constructor() {
        this.currentTab = 'dashboard';
        this.data = this.loadAppData();
        this.charts = {};
        this.init();
    }

    loadAppData() {
        return {
            "enhancedUserProfile": {
                "name": "Arjun Sharma",
                "email": "arjun.sharma@iitg.ac.in",
                "college": "IIT Guwahati",
                "year": 3,
                "course": "Computer Science Engineering",
                "monthly_allowance": 15000,
                "financial_health_score": 78,
                "current_level": 12,
                "xp_points": 2450,
                "achievements_earned": 8,
                "streak_days": 23,
                "total_saved": 8500
            },
            "detailedTransactions": [
                {"id": 1, "date": "2025-08-18", "amount": 240, "category": "Food & Dining", "vendor": "Dominos Pizza", "type": "UPI", "location": "Campus", "recurring": false, "tags": ["weekend", "friends"], "receipt_url": "receipt1.jpg"},
                {"id": 2, "date": "2025-08-18", "amount": 150, "category": "Transportation", "vendor": "Ola Auto", "type": "UPI", "location": "Guwahati", "recurring": false, "tags": ["medical"], "receipt_url": null},
                {"id": 3, "date": "2025-08-17", "amount": 2800, "category": "Education", "vendor": "Tech Bookstore", "type": "UPI", "location": "Campus", "recurring": false, "tags": ["textbooks", "semester"], "receipt_url": "receipt2.jpg"},
                {"id": 4, "date": "2025-08-17", "amount": 500, "category": "Personal Care", "vendor": "Campus Pharmacy", "type": "Cash", "location": "Campus", "recurring": false, "tags": ["health"], "receipt_url": null},
                {"id": 5, "date": "2025-08-16", "amount": 1200, "category": "Entertainment", "vendor": "PVR Cinemas", "type": "UPI", "location": "City Mall", "recurring": false, "tags": ["friends", "weekend", "movie"], "receipt_url": null},
                {"id": 6, "date": "2025-08-16", "amount": 3500, "category": "Hostel/Rent", "vendor": "Hostel Mess", "type": "UPI", "location": "Campus", "recurring": true, "tags": ["monthly", "essential"], "receipt_url": "receipt3.jpg"},
                {"id": 7, "date": "2025-08-15", "amount": 80, "category": "Food & Dining", "vendor": "Campus Canteen", "type": "Cash", "location": "Campus", "recurring": false, "tags": ["lunch"], "receipt_url": null},
                {"id": 8, "date": "2025-08-15", "amount": 350, "category": "Personal Care", "vendor": "Salon Plus", "type": "UPI", "location": "Campus", "recurring": false, "tags": ["grooming"], "receipt_url": null},
                {"id": 9, "date": "2025-08-14", "amount": 1500, "category": "Education", "vendor": "Online Course", "type": "UPI", "location": "Online", "recurring": false, "tags": ["skill", "certification"], "receipt_url": null},
                {"id": 10, "date": "2025-08-13", "amount": 450, "category": "Food & Dining", "vendor": "Zomato Order", "type": "UPI", "location": "Hostel", "recurring": false, "tags": ["dinner", "craving"], "receipt_url": null}
            ],
            "advancedBudgets": {
                "monthly_budget": 15000,
                "categories": {
                    "Food & Dining": {"allocated": 4000, "spent": 2840, "predicted": 3800, "trend": "on_track"},
                    "Transportation": {"allocated": 800, "spent": 450, "predicted": 600, "trend": "under_budget"},
                    "Education": {"allocated": 3000, "spent": 2800, "predicted": 2900, "trend": "on_track"},
                    "Entertainment": {"allocated": 2000, "spent": 1200, "predicted": 1800, "trend": "under_budget"},
                    "Personal Care": {"allocated": 1000, "spent": 650, "predicted": 900, "trend": "under_budget"},
                    "Hostel/Rent": {"allocated": 3500, "spent": 3500, "predicted": 3500, "trend": "fixed"},
                    "Miscellaneous": {"allocated": 700, "spent": 200, "predicted": 500, "trend": "under_budget"}
                },
                "savings_goals": [
                    {"name": "Laptop Fund", "target": 60000, "current": 15000, "monthly_contribution": 2000, "deadline": "2025-12-31"},
                    {"name": "Emergency Fund", "target": 25000, "current": 8500, "monthly_contribution": 1000, "deadline": "2026-06-30"}
                ]
            },
            "aiRecommendations": [
                {"id": 1, "type": "saving_tip", "title": "Cook 4 Meals This Week", "description": "You've spent ₹1,200 on food delivery. Cooking can save you ₹800", "potential_savings": 800, "difficulty": "easy", "category": "food"},
                {"id": 2, "type": "spending_alert", "title": "Entertainment Budget Alert", "description": "You're 60% through your entertainment budget with 12 days left", "action": "Consider free campus events", "category": "entertainment"},
                {"id": 3, "type": "optimization", "title": "Transportation Savings", "description": "Great job! You're ₹350 under transportation budget", "celebration": true, "category": "transportation"},
                {"id": 4, "type": "investment", "title": "Surplus Investment Opportunity", "description": "You have ₹2,000 surplus. Consider starting a SIP", "potential_growth": 1200, "category": "investment"}
            ],
            "gamificationData": {
                "current_level": 12,
                "xp_points": 2450,
                "next_level_xp": 2500,
                "achievements": [
                    {"id": 1, "name": "Budget Master", "description": "Stay within budget for 7 days", "icon": "🏆", "earned": true, "date_earned": "2025-08-15", "xp_reward": 100},
                    {"id": 2, "name": "Savings Streak", "description": "Save money for 15 consecutive days", "icon": "💰", "earned": true, "date_earned": "2025-08-10", "xp_reward": 200},
                    {"id": 3, "name": "Expense Tracker Pro", "description": "Log 50 expenses", "icon": "📊", "earned": true, "date_earned": "2025-08-01", "xp_reward": 150},
                    {"id": 4, "name": "Smart Shopper", "description": "Use 10 AI recommendations", "icon": "🧠", "earned": true, "date_earned": "2025-07-25", "xp_reward": 120},
                    {"id": 5, "name": "Social Saver", "description": "Complete a group challenge", "icon": "👥", "earned": false, "xp_reward": 250},
                    {"id": 6, "name": "Night Owl Spender", "description": "Track expenses after 11 PM", "icon": "🦉", "earned": false, "xp_reward": 75},
                    {"id": 7, "name": "Weekend Warrior", "description": "Stay under weekend budget", "icon": "⚔️", "earned": true, "date_earned": "2025-08-12", "xp_reward": 150},
                    {"id": 8, "name": "Bulk Buyer", "description": "Save money with bulk purchases", "icon": "📦", "earned": false, "xp_reward": 100}
                ],
                "active_challenges": [
                    {"id": 1, "name": "August Savings Challenge", "description": "Save ₹2,000 this month", "progress": 1500, "target": 2000, "days_left": 12, "reward_xp": 300},
                    {"id": 2, "name": "Cook at Home Week", "description": "Cook 5 meals this week", "progress": 3, "target": 5, "days_left": 4, "reward_xp": 150}
                ],
                "leaderboard": [
                    {"rank": 1, "name": "Priya K.", "college": "IIT Guwahati", "streak": 45, "total_saved": 12000},
                    {"rank": 2, "name": "You", "college": "IIT Guwahati", "streak": 23, "total_saved": 8500},
                    {"rank": 3, "name": "Rohit M.", "college": "IIT Guwahati", "streak": 21, "total_saved": 7800},
                    {"rank": 4, "name": "Sneha P.", "college": "IIT Guwahati", "streak": 19, "total_saved": 6200},
                    {"rank": 5, "name": "Karthik S.", "college": "IIT Guwahati", "streak": 15, "total_saved": 5800}
                ]
            },
            "analyticsData": {
                "monthly_spending_trend": [
                    {"month": "Mar", "amount": 14200},
                    {"month": "Apr", "amount": 13800},
                    {"month": "May", "amount": 15200},
                    {"month": "Jun", "amount": 14500},
                    {"month": "Jul", "amount": 13900},
                    {"month": "Aug", "amount": 11640}
                ],
                "category_trends": {
                    "Food & Dining": [800, 950, 1200, 1100, 980, 710],
                    "Transportation": [200, 180, 250, 220, 190, 112],
                    "Education": [500, 800, 1200, 600, 400, 700],
                    "Entertainment": [400, 350, 600, 500, 450, 300]
                },
                "spending_velocity": {
                    "current_pace": "on_track",
                    "projected_month_end": 14200,
                    "days_remaining": 12,
                    "average_daily_spend": 387
                }
            }
        };
    }

    init() {
        this.setupEventListeners();
        this.setupThemeToggle();
        this.renderDashboard();
        this.generateHeatmap();
        this.animateCounters();
    }

    setupEventListeners() {
        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.bindEventListeners();
        });

        // If DOM is already loaded, bind immediately
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.bindEventListeners();
            });
        } else {
            this.bindEventListeners();
        }
    }

    bindEventListeners() {
        // Tab navigation with null checks
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const tabName = e.currentTarget.dataset.tab;
                if (tabName) {
                    this.switchTab(tabName);
                }
            });
        });

        // Quick actions with null checks
        this.safeAddEventListener('addExpenseBtn', 'click', () => this.openExpenseModal());
        this.safeAddEventListener('addExpenseModal', 'click', () => this.openExpenseModal());
        this.safeAddEventListener('voiceExpenseBtn', 'click', () => this.startVoiceInput());
        this.safeAddEventListener('scanReceiptBtn', 'click', () => this.scanReceipt());
        this.safeAddEventListener('upiSyncBtn', 'click', () => this.syncUPI());

        // Modal controls with null checks
        this.safeAddEventListener('closeExpenseModal', 'click', () => this.closeExpenseModal());
        this.safeAddEventListener('cancelExpense', 'click', () => this.closeExpenseModal());
        
        const expenseForm = document.getElementById('expenseForm');
        if (expenseForm) {
            expenseForm.addEventListener('submit', (e) => this.handleExpenseSubmit(e));
        }

        // AI Chat with null checks
        this.safeAddEventListener('chatSendBtn', 'click', () => this.sendChatMessage());
        
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendChatMessage();
                }
            });
        }

        // Quick suggestions
        const suggestionBtns = document.querySelectorAll('.suggestion-btn');
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.target.textContent;
                this.sendChatMessage(message);
            });
        });

        // Modal overlay close with null check
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => this.closeExpenseModal());
        }
    }

    safeAddEventListener(elementId, event, handler) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener(event, handler);
        }
    }

    switchTab(tabName) {
        console.log('Switching to tab:', tabName);
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.tab === tabName) {
                item.classList.add('active');
            }
        });

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.classList.add('active');
        }

        this.currentTab = tabName;

        // Load tab-specific content
        switch (tabName) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'expenses':
                this.renderExpenses();
                break;
            case 'budget':
                this.renderBudget();
                break;
            case 'analytics':
                this.renderAnalytics();
                break;
            case 'achievements':
                this.renderAchievements();
                break;
            case 'ai-chat':
                this.initializeChat();
                break;
        }
    }

    renderDashboard() {
        this.renderRecommendations();
        this.renderRecentTransactions();
        this.generateHeatmap();
    }

    renderRecommendations() {
        const container = document.getElementById('recommendationsList');
        if (!container) return;

        container.innerHTML = this.data.aiRecommendations.map(rec => `
            <div class="recommendation-card" data-category="${rec.category}">
                <div class="recommendation-title">${rec.title}</div>
                <div class="recommendation-description">${rec.description}</div>
                <div class="recommendation-meta">
                    ${rec.potential_savings ? `<span class="savings-amount">Save ₹${rec.potential_savings}</span>` : ''}
                    ${rec.difficulty ? `<span class="difficulty-badge">${rec.difficulty}</span>` : ''}
                    ${rec.celebration ? `<span class="savings-amount">🎉 Great job!</span>` : ''}
                </div>
            </div>
        `).join('');
    }

    renderRecentTransactions() {
        const container = document.getElementById('recentTransactions');
        if (!container) return;

        const recent = this.data.detailedTransactions.slice(0, 5);
        container.innerHTML = recent.map(transaction => {
            const categoryIcon = this.getCategoryIcon(transaction.category);
            const categoryColor = this.getCategoryColor(transaction.category);
            
            return `
                <div class="transaction-item">
                    <div class="transaction-icon" style="background: ${categoryColor}; color: white;">
                        <i class="${categoryIcon}"></i>
                    </div>
                    <div class="transaction-info">
                        <div class="transaction-vendor">${transaction.vendor}</div>
                        <div class="transaction-category">${transaction.category}</div>
                    </div>
                    <div class="transaction-amount">
                        <div>₹${transaction.amount}</div>
                        <div class="transaction-date">${this.formatDate(transaction.date)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderExpenses() {
        const container = document.getElementById('expenseList');
        if (!container) return;

        container.innerHTML = this.data.detailedTransactions.map(expense => `
            <div class="expense-item">
                <div class="transaction-icon" style="background: ${this.getCategoryColor(expense.category)}; color: white;">
                    <i class="${this.getCategoryIcon(expense.category)}"></i>
                </div>
                <div class="expense-details">
                    <div class="expense-vendor">${expense.vendor}</div>
                    <div class="expense-category">${expense.category}</div>
                    <div class="expense-tags">${expense.tags ? expense.tags.join(', ') : ''}</div>
                </div>
                <div class="expense-amount">₹${expense.amount}</div>
                <div class="expense-type">${expense.type}</div>
                <div class="expense-date">${this.formatDate(expense.date)}</div>
            </div>
        `).join('');

        this.setupExpenseFilters();
    }

    renderBudget() {
        this.renderBudgetCategories();
        this.renderSavingsGoals();
    }

    renderBudgetCategories() {
        const container = document.getElementById('budgetCategories');
        if (!container) return;

        const categories = this.data.advancedBudgets.categories;
        container.innerHTML = Object.entries(categories).map(([name, data]) => {
            const percentage = (data.spent / data.allocated) * 100;
            const progressColor = this.getBudgetProgressColor(data.trend);
            
            return `
                <div class="budget-category">
                    <div class="category-header">
                        <div class="category-name">${name}</div>
                        <div class="category-trend ${data.trend}">${data.trend.replace('_', ' ')}</div>
                    </div>
                    <div class="category-amounts">
                        <span>₹${data.spent} / ₹${data.allocated}</span>
                        <span>Predicted: ₹${data.predicted}</span>
                    </div>
                    <div class="category-progress">
                        <div class="category-progress-fill" style="width: ${Math.min(percentage, 100)}%; background: ${progressColor}"></div>
                    </div>
                    <div class="category-meta">
                        <span>${percentage.toFixed(1)}% used</span>
                        <span>₹${data.allocated - data.spent} remaining</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderSavingsGoals() {
        const container = document.getElementById('savingsGoals');
        if (!container) return;

        container.innerHTML = this.data.advancedBudgets.savings_goals.map(goal => {
            const percentage = (goal.current / goal.target) * 100;
            
            return `
                <div class="goal-item">
                    <div class="goal-header">
                        <div class="goal-name">${goal.name}</div>
                        <div class="goal-target">₹${goal.current.toLocaleString()} / ₹${goal.target.toLocaleString()}</div>
                    </div>
                    <div class="goal-progress">
                        <div class="goal-progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    <div class="goal-meta">
                        <span>${percentage.toFixed(1)}% complete</span>
                        <span>Target: ${goal.deadline}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderAnalytics() {
        setTimeout(() => {
            this.createSpendingTrendChart();
            this.createCategoryChart();
            this.createVelocityChart();
            this.createSavingsChart();
        }, 100);
    }

    renderAchievements() {
        this.renderActiveChallenges();
        this.renderAchievementsList();
        this.renderLeaderboard();
    }

    renderActiveChallenges() {
        const container = document.getElementById('activeChallenges');
        if (!container) return;

        container.innerHTML = this.data.gamificationData.active_challenges.map(challenge => {
            const percentage = (challenge.progress / challenge.target) * 100;
            
            return `
                <div class="challenge-item">
                    <div class="challenge-header">
                        <div class="challenge-name">${challenge.name}</div>
                        <div class="challenge-days">${challenge.days_left} days left</div>
                    </div>
                    <div class="challenge-description">${challenge.description}</div>
                    <div class="challenge-progress">
                        <div class="challenge-progress-bar">
                            <div class="challenge-progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <div class="challenge-meta">
                            <span>${challenge.progress} / ${challenge.target}</span>
                            <span>+${challenge.reward_xp} XP</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderAchievementsList() {
        const container = document.getElementById('achievementsList');
        if (!container) return;

        container.innerHTML = this.data.gamificationData.achievements.map(achievement => `
            <div class="achievement-item ${achievement.earned ? 'earned' : ''}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-xp">+${achievement.xp_reward} XP</div>
                ${achievement.earned ? `<div class="achievement-date">Earned: ${this.formatDate(achievement.date_earned)}</div>` : ''}
            </div>
        `).join('');
    }

    renderLeaderboard() {
        const container = document.getElementById('leaderboardList');
        if (!container) return;

        container.innerHTML = this.data.gamificationData.leaderboard.map(entry => `
            <div class="leaderboard-item ${entry.name === 'You' ? 'current-user' : ''}">
                <div class="leaderboard-rank">${entry.rank}</div>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${entry.name}</div>
                    <div class="leaderboard-college">${entry.college}</div>
                </div>
                <div class="leaderboard-stats">
                    <div class="leaderboard-streak">${entry.streak} days</div>
                    <div class="leaderboard-saved">₹${entry.total_saved.toLocaleString()}</div>
                </div>
            </div>
        `).join('');
    }

    createSpendingTrendChart() {
        const canvas = document.getElementById('spendingTrendChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.spendingTrend) {
            this.charts.spendingTrend.destroy();
        }

        this.charts.spendingTrend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.data.analyticsData.monthly_spending_trend.map(d => d.month),
                datasets: [{
                    label: 'Monthly Spending',
                    data: this.data.analyticsData.monthly_spending_trend.map(d => d.amount),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    createCategoryChart() {
        const canvas = document.getElementById('categoryChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.category) {
            this.charts.category.destroy();
        }

        const categories = this.data.advancedBudgets.categories;
        const chartData = Object.entries(categories).map(([name, data]) => ({
            name,
            spent: data.spent
        }));

        this.charts.category = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: chartData.map(d => d.name),
                datasets: [{
                    data: chartData.map(d => d.spent),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createVelocityChart() {
        const canvas = document.getElementById('velocityChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.velocity) {
            this.charts.velocity.destroy();
        }

        const velocity = this.data.analyticsData.spending_velocity;
        const dailyBudget = this.data.advancedBudgets.monthly_budget / 30;
        
        // Generate projected vs actual spending
        const days = Array.from({length: 18}, (_, i) => i + 1);
        const actualSpending = days.map(day => {
            return day * 387 + (Math.random() - 0.5) * 200;
        });
        const projectedSpending = days.map(day => day * dailyBudget);

        this.charts.velocity = new Chart(ctx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [
                    {
                        label: 'Actual Spending',
                        data: actualSpending,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: false,
                        tension: 0.3
                    },
                    {
                        label: 'Projected Budget',
                        data: projectedSpending,
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        fill: false,
                        borderDash: [5, 5],
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toFixed(0);
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Days in August'
                        }
                    }
                }
            }
        });
    }

    createSavingsChart() {
        const canvas = document.getElementById('savingsChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const ctx = canvas.getContext('2d');
        
        if (this.charts.savings) {
            this.charts.savings.destroy();
        }

        const goals = this.data.advancedBudgets.savings_goals;

        this.charts.savings = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: goals.map(g => g.name),
                datasets: [
                    {
                        label: 'Current Savings',
                        data: goals.map(g => g.current),
                        backgroundColor: '#1FB8CD'
                    },
                    {
                        label: 'Target Amount',
                        data: goals.map(g => g.target),
                        backgroundColor: '#FFC185'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    generateHeatmap() {
        const container = document.getElementById('heatmapCalendar');
        if (!container) return;

        // Generate heatmap for current month (August 2025)
        const daysInMonth = 31;
        const startDay = 5; // August 1, 2025 is a Friday (5)
        
        let html = '';
        
        // Add day labels
        const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        dayLabels.forEach(label => {
            html += `<div style="font-size: 10px; text-align: center; color: var(--color-text-secondary); padding: 4px;">${label}</div>`;
        });

        // Add empty cells for days before month starts
        for (let i = 0; i < startDay; i++) {
            html += '<div class="heatmap-day empty"></div>';
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const intensity = this.getSpendingIntensity(day);
            const amount = this.getDaySpending(day);
            
            html += `
                <div class="heatmap-day ${intensity}" 
                     title="Aug ${day}: ₹${amount}" 
                     data-day="${day}">
                    ${day}
                </div>
            `;
        }

        container.innerHTML = html;
    }

    getSpendingIntensity(day) {
        const amount = this.getDaySpending(day);
        if (amount === 0) return 'empty';
        if (amount < 200) return 'low';
        if (amount < 800) return 'medium';
        return 'high';
    }

    getDaySpending(day) {
        const dayStr = `2025-08-${day.toString().padStart(2, '0')}`;
        const dayTransactions = this.data.detailedTransactions.filter(t => t.date === dayStr);
        return dayTransactions.reduce((sum, t) => sum + t.amount, 0);
    }

    animateCounters() {
        const counters = [
            {element: document.getElementById('totalSpent'), target: 11640, prefix: '₹'},
            {element: document.getElementById('totalSaved'), target: 8500, prefix: '₹'},
            {element: document.getElementById('streakDays'), target: 23, prefix: ''},
            {element: document.getElementById('healthScore'), target: 78, prefix: ''}
        ];

        counters.forEach(counter => {
            if (!counter.element) return;
            
            let current = 0;
            const increment = counter.target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= counter.target) {
                    current = counter.target;
                    clearInterval(timer);
                }
                counter.element.textContent = counter.prefix + Math.floor(current).toLocaleString();
            }, 40);
        });
    }

    setupThemeToggle() {
        const themeBtn = document.getElementById('themeToggle');
        if (!themeBtn) return;
        
        const currentTheme = localStorage.getItem('theme') || 'auto';
        
        themeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const body = document.body;
            const currentTheme = body.dataset.colorScheme || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.dataset.colorScheme = newTheme;
            localStorage.setItem('theme', newTheme);
            
            themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        // Set initial theme
        if (currentTheme !== 'auto') {
            document.body.dataset.colorScheme = currentTheme;
            themeBtn.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }

    openExpenseModal() {
        const modal = document.getElementById('expenseModal');
        if (modal) {
            modal.classList.remove('hidden');
            
            // Set today's date as default
            const today = new Date().toISOString().split('T')[0];
            const dateInput = document.getElementById('expenseDate');
            if (dateInput) {
                dateInput.value = today;
            }
        }
    }

    closeExpenseModal() {
        const modal = document.getElementById('expenseModal');
        if (modal) {
            modal.classList.add('hidden');
            const form = document.getElementById('expenseForm');
            if (form) {
                form.reset();
            }
        }
    }

    handleExpenseSubmit(e) {
        e.preventDefault();
        
        const expense = {
            id: Date.now(),
            date: document.getElementById('expenseDate')?.value || new Date().toISOString().split('T')[0],
            amount: parseFloat(document.getElementById('expenseAmount')?.value || 0),
            category: document.getElementById('expenseCategory')?.value || '',
            vendor: document.getElementById('expenseVendor')?.value || '',
            type: document.getElementById('expensePayment')?.value || 'UPI',
            tags: (document.getElementById('expenseTags')?.value || '').split(',').map(t => t.trim()).filter(t => t),
            location: 'Manual Entry',
            recurring: false,
            receipt_url: null
        };

        // Add to transactions
        this.data.detailedTransactions.unshift(expense);
        
        // Update budget spent amount
        if (this.data.advancedBudgets.categories[expense.category]) {
            this.data.advancedBudgets.categories[expense.category].spent += expense.amount;
        }

        this.showNotification('Expense added successfully!', 'success');
        this.closeExpenseModal();
        
        // Refresh current view
        if (this.currentTab === 'expenses') {
            this.renderExpenses();
        } else if (this.currentTab === 'dashboard') {
            this.renderDashboard();
        } else if (this.currentTab === 'budget') {
            this.renderBudget();
        }
    }

    startVoiceInput() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-IN';
            recognition.interimResults = false;
            
            recognition.onstart = () => {
                this.showNotification('🎤 Listening... Say your expense details', 'info');
            };
            
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.processVoiceInput(transcript);
            };
            
            recognition.onerror = () => {
                this.showNotification('Voice recognition error. Please try again.', 'error');
            };
            
            recognition.start();
        } else {
            this.showNotification('Voice recognition not supported in this browser', 'error');
        }
    }

    processVoiceInput(transcript) {
        const words = transcript.toLowerCase().split(' ');
        const amounts = words.filter(word => /\d+/.test(word));
        
        if (amounts.length > 0) {
            const amount = amounts[0].replace(/\D/g, '');
            this.openExpenseModal();
            
            const amountInput = document.getElementById('expenseAmount');
            const vendorInput = document.getElementById('expenseVendor');
            
            if (amountInput) amountInput.value = amount;
            if (vendorInput) vendorInput.value = transcript;
            
            this.showNotification(`Parsed: ₹${amount} from voice input`, 'success');
        } else {
            this.showNotification('Could not parse amount from voice input', 'error');
        }
    }

    scanReceipt() {
        this.showNotification('📷 Scanning receipt...', 'info');
        
        setTimeout(() => {
            const mockReceipt = {
                amount: 450,
                vendor: 'Campus Cafe',
                category: 'Food & Dining',
                date: new Date().toISOString().split('T')[0]
            };
            
            this.openExpenseModal();
            
            const amountInput = document.getElementById('expenseAmount');
            const vendorInput = document.getElementById('expenseVendor');
            const categorySelect = document.getElementById('expenseCategory');
            const dateInput = document.getElementById('expenseDate');
            
            if (amountInput) amountInput.value = mockReceipt.amount;
            if (vendorInput) vendorInput.value = mockReceipt.vendor;
            if (categorySelect) categorySelect.value = mockReceipt.category;
            if (dateInput) dateInput.value = mockReceipt.date;
            
            this.showNotification('✅ Receipt scanned successfully!', 'success');
        }, 2000);
    }

    syncUPI() {
        this.showNotification('🔄 Syncing UPI transactions...', 'info');
        
        setTimeout(() => {
            const mockTransactions = [
                {
                    id: Date.now() + 1,
                    date: new Date().toISOString().split('T')[0],
                    amount: 75,
                    category: 'Transportation',
                    vendor: 'Auto Rickshaw',
                    type: 'UPI',
                    location: 'Campus',
                    recurring: false,
                    tags: ['commute']
                }
            ];
            
            this.data.detailedTransactions.unshift(...mockTransactions);
            this.showNotification('✅ Synced 1 new UPI transaction', 'success');
            
            if (this.currentTab === 'dashboard') {
                this.renderDashboard();
            } else if (this.currentTab === 'expenses') {
                this.renderExpenses();
            }
        }, 2000);
    }

    initializeChat() {
        // Chat is already initialized in HTML
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.focus();
        }
    }

    sendChatMessage(message = null) {
        const input = document.getElementById('chatInput');
        const messagesContainer = document.getElementById('chatMessages');
        
        if (!input || !messagesContainer) return;
        
        const userMessage = message || input.value.trim();
        if (!userMessage) return;

        // Add user message
        const userMessageHtml = `
            <div class="message user-message">
                <div class="message-content">${userMessage}</div>
                <div class="message-time">Just now</div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', userMessageHtml);

        // Clear input
        input.value = '';

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = this.generateAIResponse(userMessage);
            const aiMessageHtml = `
                <div class="message ai-message">
                    <div class="message-content">${aiResponse}</div>
                    <div class="message-time">Just now</div>
                </div>
            `;
            messagesContainer.insertAdjacentHTML('beforeend', aiMessageHtml);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateAIResponse(userMessage) {
        const responses = {
            'save': 'Based on your spending patterns, I recommend cooking more meals at home. You could save ₹800 this week by preparing 4 meals instead of ordering food.',
            'budget': 'Your budget looks healthy! You\'re currently using 77.6% of your monthly budget with 12 days remaining. Consider reducing entertainment expenses by ₹200 to stay comfortably within budget.',
            'spending': 'I notice you spend more on weekends. Your average weekend spending is ₹600 vs ₹300 on weekdays. Try setting a weekend spending limit of ₹500.',
            'investment': 'Great question! With your current surplus of ₹2,000, I suggest starting a SIP of ₹1,000 per month in a diversified equity fund. This could potentially grow to ₹15,000 in a year.',
            'default': 'I\'m here to help with your finances! I can analyze your spending, suggest budgets, recommend savings strategies, and help you achieve your financial goals. What specific area would you like to focus on?'
        };

        const message = userMessage.toLowerCase();
        for (const [key, response] of Object.entries(responses)) {
            if (message.includes(key)) {
                return response;
            }
        }
        return responses.default;
    }

    setupExpenseFilters() {
        const searchInput = document.getElementById('expenseSearch');
        const categoryFilter = document.getElementById('categoryFilter');
        const dateFromFilter = document.getElementById('dateFrom');
        const dateToFilter = document.getElementById('dateTo');

        const filterExpenses = () => {
            const searchTerm = searchInput?.value.toLowerCase() || '';
            const categoryTerm = categoryFilter?.value || '';
            const dateFrom = dateFromFilter?.value || '';
            const dateTo = dateToFilter?.value || '';

            const filteredExpenses = this.data.detailedTransactions.filter(expense => {
                const matchesSearch = expense.vendor.toLowerCase().includes(searchTerm) ||
                                    expense.category.toLowerCase().includes(searchTerm);
                const matchesCategory = !categoryTerm || expense.category === categoryTerm;
                const matchesDateFrom = !dateFrom || expense.date >= dateFrom;
                const matchesDateTo = !dateTo || expense.date <= dateTo;

                return matchesSearch && matchesCategory && matchesDateFrom && matchesDateTo;
            });

            this.renderFilteredExpenses(filteredExpenses);
        };

        if (searchInput) searchInput.addEventListener('input', filterExpenses);
        if (categoryFilter) categoryFilter.addEventListener('change', filterExpenses);
        if (dateFromFilter) dateFromFilter.addEventListener('change', filterExpenses);
        if (dateToFilter) dateToFilter.addEventListener('change', filterExpenses);
    }

    renderFilteredExpenses(expenses) {
        const container = document.getElementById('expenseList');
        if (!container) return;

        container.innerHTML = expenses.map(expense => `
            <div class="expense-item">
                <div class="transaction-icon" style="background: ${this.getCategoryColor(expense.category)}; color: white;">
                    <i class="${this.getCategoryIcon(expense.category)}"></i>
                </div>
                <div class="expense-details">
                    <div class="expense-vendor">${expense.vendor}</div>
                    <div class="expense-category">${expense.category}</div>
                    <div class="expense-tags">${expense.tags ? expense.tags.join(', ') : ''}</div>
                </div>
                <div class="expense-amount">₹${expense.amount}</div>
                <div class="expense-type">${expense.type}</div>
                <div class="expense-date">${this.formatDate(expense.date)}</div>
            </div>
        `).join('');
    }

    getCategoryIcon(category) {
        const icons = {
            'Food & Dining': 'fas fa-utensils',
            'Transportation': 'fas fa-car',
            'Education': 'fas fa-book',
            'Entertainment': 'fas fa-film',
            'Personal Care': 'fas fa-heart',
            'Hostel/Rent': 'fas fa-home',
            'Miscellaneous': 'fas fa-shopping-bag'
        };
        return icons[category] || 'fas fa-receipt';
    }

    getCategoryColor(category) {
        const colors = {
            'Food & Dining': '#1FB8CD',
            'Transportation': '#FFC185',
            'Education': '#B4413C',
            'Entertainment': '#5D878F',
            'Personal Care': '#DB4545',
            'Hostel/Rent': '#D2BA4C',
            'Miscellaneous': '#964325'
        };
        return colors[category] || '#1FB8CD';
    }

    getBudgetProgressColor(trend) {
        const colors = {
            'on_track': 'linear-gradient(90deg, #1FB8CD, #32B8C8)',
            'under_budget': 'linear-gradient(90deg, #32C832, #28A745)',
            'over_budget': 'linear-gradient(90deg, #DC3545, #C82333)',
            'fixed': 'linear-gradient(90deg, #6C757D, #5A6268)'
        };
        return colors[trend] || colors['on_track'];
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        const today = new Date();
        const diffTime = today - date;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        
        return date.toLocaleDateString('en-IN', { 
            month: 'short', 
            day: 'numeric' 
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--color-surface);
            color: var(--color-text);
            padding: 16px 20px;
            border-radius: 8px;
            border-left: 4px solid var(--color-${type === 'error' ? 'error' : type === 'success' ? 'success' : 'info'});
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1001;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Add custom animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.finwiseApp = new FinWiseApp();
});

// Also initialize if DOM is already loaded
if (document.readyState !== 'loading') {
    window.finwiseApp = new FinWiseApp();
}