// types/analysisDTO.js

// Default values for nested objects
const defaultMetrics = {
    total_applications: 0,
    total_customers: 0,
    total_approved_value: 0
}

const defaultTrends = {
    application_volume: 0,
    approval_rate: 0,
    avg_ticket_size: 0
}

const defaultLoanTypeGrowth = {
    Education: { share_change: 0, approval_rate: 0 },
    Home: { share_change: 0, approval_rate: 0 },
    Personal: { share_change: 0, approval_rate: 0 },
    MSME: { share_change: 0, approval_rate: 0 },
    Gold: { share_change: 0, approval_rate: 0 },
    Asset: { share_change: 0, approval_rate: 0 }
}

const defaultSegmentGrowth = {
    'Self-Employed': { share_change: 0, avg_loan_amount: 0 },
    'Salaried': { share_change: 0, avg_loan_amount: 0 },
    'Retired': { share_change: 0, avg_loan_amount: 0 },
    'Business Owner': { share_change: 0, avg_loan_amount: 0 },
    'Student': { share_change: 0, avg_loan_amount: 0 }
}

export const createAnalysisDTO = (data = {}) => {
    const marketAnalysis = data.market_analysis || {}
    const strategyRecommendations = data.strategy_recommendations || {}

    return {
        pincode: data.pincode || '',
        market_analysis: {
            market_size: {
                current_metrics: {
                    ...defaultMetrics,
                    ...(marketAnalysis.market_size?.current_metrics || {})
                },
                recent_trends: {
                    ...defaultTrends,
                    ...(marketAnalysis.market_size?.recent_trends || {})
                }
            },
            growth_patterns: {
                monthly_growth_rate: marketAnalysis.growth_patterns?.monthly_growth_rate || 0,
                loan_type_growth: {
                    ...defaultLoanTypeGrowth,
                    ...(marketAnalysis.growth_patterns?.loan_type_growth || {})
                },
                segment_growth: {
                    ...defaultSegmentGrowth,
                    ...(marketAnalysis.growth_patterns?.segment_growth || {})
                }
            },
            segment_opportunities: {
                segment_metrics: marketAnalysis.segment_opportunities?.segment_metrics || {},
                high_potential_segments: marketAnalysis.segment_opportunities?.high_potential_segments || []
            },
            risk_assessment: {
                concentration_risk: marketAnalysis.risk_assessment?.concentration_risk || {
                    loan_type_concentration: 0,
                    occupation_concentration: 0
                },
                volatility: marketAnalysis.risk_assessment?.volatility || 0,
                rejection_analysis: marketAnalysis.risk_assessment?.rejection_analysis || {
                    overall_rejection_rate: 0,
                    rejection_by_loan_type: {},
                    high_risk_segments: []
                }
            }
        },
        strategy_recommendations: {
            target_segments: strategyRecommendations.target_segments || [],
            channel_strategy: strategyRecommendations.channel_strategy || [],
            product_recommendations: strategyRecommendations.product_recommendations || [],
            risk_mitigation: strategyRecommendations.risk_mitigation || [],
            implementation_plan: {
                phases: strategyRecommendations.implementation_plan?.phases || [],
                // success_metrics: strategyRecommendations.implementation_plan?.success_metrics || {
                //     application_increase: { target: 0, timeline: '' },
                //     approval_increase: { target: 0, timeline: '' }
                // }
            }
        }
    }
}